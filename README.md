# MUUNS Cakes and Bakery: demo website

A static, bilingual (English / Arabic) one-page site for **MUUNS Cakes and Bakery**,
Building 4, Khalid Bin Al Waleed Rd, near York International Hotel, Al Souq Al Kabeer, Bur Dubai.

- **Live demo:** https://tanish0212.github.io/muuns-cakes-demo/
- **Counter poster (A5, printable):** https://tanish0212.github.io/muuns-cakes-demo/poster.html

No frameworks, no build step, no API keys. Open `index.html` through any static server
(e.g. `python -m http.server`) or host it on GitHub Pages.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure (section order, icon sprite, `<head>` meta tags) |
| `style.css` | All styling. Mobile-first, logical properties so Arabic RTL mirrors automatically |
| `script.js` | The `SHOP` content object (top) + the site logic (bottom, no need to edit) |
| `poster.html` | Printable A5 counter poster with two inline SVG QR codes (WhatsApp + website) |
| `images/` | Logo, fine-line illustrations, `og-image.png` (1200×630 share image), touch icon |

## Editing the content

Everything on the page comes from the **`SHOP` object at the top of `script.js`**: name, phone,
WhatsApp number, map links, hours, rating, cakes, gallery, reviews and every English and Arabic text.

- `whatsappNumber`: digits only. Every WhatsApp button opens `https://wa.me/<number>` with a pre-filled
  message in the page language. Each cake card pre-fills a message about that cake.
- `hours`: one entry per weekday (0 = Sunday … 6 = Saturday), `["HH:MM", "HH:MM"]` in shop time, or `null`
  for a closed day. **A closing time earlier than the opening time means after midnight**: `["10:00", "00:30"]`
  = 10 AM until 12:30 AM. The "Open now / Closed now" badge uses `Asia/Dubai` time, so it is correct
  wherever the visitor is (at 12:15 AM it still says "Open now · until 12:30 AM").
- `showDemoBanner: false` hides the "Demo preview" banner.
- JSON-LD structured data (`Bakery`, opening hours, rating) is built from `SHOP` automatically.
- WhatsApp link previews don't run JavaScript, so also edit the `<title>`, description and `og:` / `twitter:`
  tags in the `<head>` of `index.html`.

Only put **real, confirmed facts** in the content: no made-up prices, flavours, staff, years or reviews.

## Swapping illustrations for real photos

Every image slot is **one file path**. Put the photo in `images/` and change that one path:

| Slot | Where to change it | Frame |
| --- | --- | --- |
| Hero (tiered cake) | `SHOP.images.hero.src` | 4:5 arch |
| "Made your way" (cupcake) | `SHOP.images.made.src` | 4:5 |
| Delivery (cake box) | `SHOP.images.delivery.src` | round |
| Cake cards | `image` of each entry in `SHOP.cakes` | 5:4 |
| **Cake gallery** | `src` of each entry in `SHOP.gallery` | square, `tall` = 2 rows, `wide` = 2 columns |

Update the `alt` text (cards/slots) or the caption (`en` / `ar`, gallery) too. Add or remove gallery entries freely.
Photos use `object-fit: cover`; illustrations (`.svg`) use `contain` so they're never cropped.
Use about 1200 px photos, compressed (squoosh.app, WebP/JPEG ~75 %), each under 250 KB.

## Poster

The QR codes in `poster.html` are static inline SVG made locally with [segno](https://pypi.org/project/segno/)
(no online QR service). To regenerate one:

```bash
pip install segno
python -c "import segno; print(segno.make('https://your-link/', error='m').svg_inline(dark='#2E1C15', border=2, omitsize=True))"
```

Paste the printed `<svg …>` inside `.qr-box` and add `class="qr"`. Print with **Margins: none** and
**Background graphics: on**. It fits exactly one A5 page.

## Design

A boutique cake-studio look: vanilla cream and latte "paper" with one accent, deep chocolate.
Headings in Fraunces, body in Manrope, Arabic in Almarai. The scalloped "frosting" edge is the recurring motif.
The illustrations share one style: a 2.4px chocolate line with cream, blush and caramel fills.

## Notes

- `<meta name="robots" content="noindex">` keeps the demo out of Google. Remove it when the site goes live.
- The language choice is saved in `localStorage` (if available) under `site-lang`.
- Animations are subtle and switch off for visitors with "reduce motion" enabled.
- `screenshots/` is local QA output only and is git-ignored.
