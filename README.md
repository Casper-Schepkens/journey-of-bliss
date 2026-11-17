# Journey of Bliss

Next.js rebuild of [journeyofbliss.com](https://journeyofbliss.com/), an Indian tour operator. The App Router site keeps the previous look: indigo-to-burgundy top bar, teal accents, Oxygen and Kaushan Script, and the same page paths.

## Tours

Only three journeys are listed. Older packages and category menus are not included. None of them show a price.

- Golden Triangle — 5 nights / 6 days — `/tours/6-day-golden-triangle-delhi-agra-and-jaipur-tour/`
- Rajasthan Heritage Explorer — 9 nights / 10 days — `/tours/rajathan-tour-packages-for-10-days/`
- Spiritual Sojourn — 11 nights / 12 days — `/tours/delhi-haridwar-gangotri-yamuna-otri-kedarnath-badrinath/`

The Spiritual Sojourn day-by-day plan was empty on the old site, so the page shows the route and an itinerary-on-request note.

## Develop

```bash
npm install
npm run dev
npm run build
```

Photographs in `public/images` are from Pexels (free commercial use). The logo and icons are the existing brand files. The enquiry form sends to info@journeyofbliss.com through FormSubmit. The first real submission has to be confirmed from that inbox before later messages are delivered.
