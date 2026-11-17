import { tourLinks, whatsappHref } from "@/lib/site";

export type TourPhoto = { src: string; alt: string };

export type ItineraryDay = { title: string; body: string };

export type Tour = {
  slug: string;
  href: string;
  title: string;
  category: string;
  duration: string;
  durationShort: string;
  excerpt: string;
  description: string;
  departure: string;
  cover: TourPhoto;
  photos: TourPhoto[];
  days: ItineraryDay[] | null;
  itineraryNote?: string;
  route?: string[];
  vehicle?: string;
  enquireHref: string;
};

const priceLabel = "Price on request";

function photo(folder: string, file: string, alt: string): TourPhoto {
  return { src: `/images/${folder}/${file}`, alt };
}

const golden = "golden-triangle";
const rajasthan = "rajasthan-heritage";
const spiritual = "spiritual-sojourn";

export const tours: Tour[] = [
  {
    slug: tourLinks[0].slug,
    href: tourLinks[0].href,
    title: "Golden Triangle",
    category: "Golden Triangle",
    duration: "5 nights / 6 days",
    durationShort: "5N / 6D",
    excerpt:
      "Experience the breathtaking beauty of the Taj Mahal, the world’s most famous monument to love, on a journey through Delhi, Agra and Jaipur.",
    description:
      "Experience the breathtaking beauty of the Taj Mahal, the world’s most famous monument to love. Admire its stunning white marble architecture, intricate carvings, and serene gardens, embodying a timeless tribute to romance. This 6-day Golden Triangle continues through Old and New Delhi and on to Jaipur, the Pink City.",
    departure: "Delhi Airport",
    cover: photo(golden, "agra-taj-mahal.jpg", "The Taj Mahal in Agra"),
    photos: [
      photo(golden, "agra-taj-mahal.jpg", "The Taj Mahal in Agra"),
      photo(golden, "agra-fort-with-taj-mahal-view.jpg", "Agra Fort with the Taj Mahal beyond"),
      photo(golden, "agra-sikandra-akbars-tomb.jpg", "Akbar’s tomb at Sikandra, Agra"),
      photo(golden, "delhi-red-fort-facade.jpg", "Facade of the Red Fort, Delhi"),
      photo(golden, "delhi-red-fort-diwan-e-khas.jpg", "Diwan-e-Khas at the Red Fort, Delhi"),
      photo(golden, "delhi-jama-masjid-silhouette.jpg", "Jama Masjid in Delhi"),
      photo(golden, "delhi-jama-masjid-courtyard.jpg", "Courtyard of Jama Masjid, Delhi"),
      photo(golden, "delhi-chandni-chowk-rickshaws.jpg", "Cycle rickshaws near Chandni Chowk, Delhi"),
      photo(golden, "delhi-humayuns-tomb-sunrise.jpg", "Humayun’s Tomb in its gardens, Delhi"),
      photo(golden, "delhi-qutub-minar.jpg", "Qutub Minar, Delhi"),
      photo(golden, "delhi-india-gate.jpg", "India Gate, New Delhi"),
      photo(golden, "jaipur-amber-fort.jpg", "Amber Fort, Jaipur"),
      photo(golden, "jaipur-hawa-mahal.jpg", "Hawa Mahal, Jaipur"),
      photo(golden, "jaipur-city-palace.jpg", "City Palace, Jaipur"),
      photo(golden, "jaipur-jantar-mantar.jpg", "Jantar Mantar observatory, Jaipur"),
    ],
    days: [
      {
        title: "Day 01: Arriving Delhi",
        body: "Upon arrival at Indira Gandhi International Airport, New Delhi, our representative will greet and assist you transfer you to the designated hotel. Overnight stay will be at the hotel.",
      },
      {
        title: "Day 02: Delhi Sightseeing",
        body: "After breakfast start on full day sightseeing tours of Old Delhi and New Delhi. Old Delhi – a sightseeing tour of Old Delhi includes the Raj Ghat, Jama Masjid and Red Fort. Enjoy a cycle rickshaw ride from Jama Masjid to Chandni Chowk. New Delhi – a sightseeing tour of New Delhi includes a visit to Humayun’s Tomb, Qutab Minar, imposing India Gate, Parliament House, President House, and a drive through Rajpath. Dinner and overnight stay will be at the hotel. (Delhi monuments are closed on Monday.)",
      },
      {
        title: "Day 03: Delhi – Agra",
        body: "After breakfast drive to Agra en route visiting Sikandra, the tomb of the Mughal emperor Akbar. Upon arrival in Agra (the home of the Taj Mahal), our representative will assist you to transfer you to the designated hotel. Visit the world famous love monument Taj Mahal and grand Agra Fort. The Taj Mahal was built by Mughal emperor Shah Jehan as a memorial for his beloved wife Mumtaz Mahal. This beautiful love monument is built in white marble with inlay work. Agra Fort was built by Mughal emperor Akbar in 1565 AD. You will also visit Itmad-ud-Daulah’s Tomb, which is popularly known as the Baby Taj Mahal. Dinner and overnight stay will be at the hotel.",
      },
      {
        title: "Day 04: Agra – Jaipur",
        body: "After breakfast drive to the capital of Rajasthan – Jaipur, popularly described as the Pink City. You will visit en route Fatehpur Sikri, built in the late 16th century by Mughal emperor Akbar and abandoned due to the scarcity of water. You will also visit Buland Darwaza, the largest gateway in the world. Continue your drive to the Pink City – Jaipur, the capital of Rajasthan. Upon arrival in Jaipur, our representative will assist you to transfer you to the hotel. Dinner and overnight stay will be at the hotel.",
      },
      {
        title: "Day 05: Jaipur Sightseeing",
        body: "After breakfast at the hotel, take an excursion to Amber Fort, situated atop a hill. Enjoy an elephant ride to arrive at the fort. Later, explore the attractions of Jaipur city, visiting City Palace, Hawa Mahal and Jantar Mantar among others. Also enjoy shopping at the local bustling bazaars of the city. Dinner and overnight stay will be at the hotel.",
      },
      {
        title: "Day 06: Jaipur – Delhi – Departure",
        body: "After breakfast proceed for Delhi. Upon arrival in Delhi, enjoy a farewell dinner. After dinner you will be escorted to the airport to catch a flight for your home destination.",
      },
    ],
    enquireHref: whatsappHref(
      "Hello, I would like to enquire about the Golden Triangle tour (5 nights / 6 days), departing from Delhi Airport.",
    ),
  },
  {
    slug: tourLinks[1].slug,
    href: tourLinks[1].href,
    title: "Rajasthan Heritage Explorer: Castles, Palaces, and Deserts",
    category: "Rajasthan",
    duration: "9 nights / 10 days",
    durationShort: "9N / 10D",
    excerpt:
      "Explore majestic castles, opulent palaces, and the vast, captivating deserts of Rajasthan.",
    description:
      "Explore majestic castles, opulent palaces, and the vast, captivating deserts. This tour offers a rich blend of royal history, architectural marvels, and stunning landscapes, from Jaipur and Udaipur to Jodhpur, Jaisalmer and Bikaner.",
    departure: "Delhi Airport",
    cover: photo(
      rajasthan,
      "udaipur-city-palace-lake-pichola-sunset.jpg",
      "City Palace and Lake Pichola at sunset, Udaipur",
    ),
    photos: [
      photo(rajasthan, "jaipur-amber-fort-hills.jpg", "Amber Fort on the hills above Jaipur"),
      photo(rajasthan, "jaipur-amber-fort-pathway.jpg", "Pathway at Amber Fort, Jaipur"),
      photo(rajasthan, "pushkar-lake-aerial.jpg", "Pushkar Lake and the town around it"),
      photo(rajasthan, "pushkar-lake-ghats.jpg", "Ghats at Pushkar Lake"),
      photo(
        rajasthan,
        "ajmer-adhai-din-ka-jhonpra-columns.jpg",
        "Stone columns at Adhai Din Ka Jhonpra, Ajmer",
      ),
      photo(
        rajasthan,
        "udaipur-city-palace-lake-pichola-sunset.jpg",
        "City Palace and Lake Pichola at sunset, Udaipur",
      ),
      photo(rajasthan, "udaipur-city-palace-aerial.jpg", "Aerial view of Udaipur and the City Palace"),
      photo(
        rajasthan,
        "mount-abu-dilwara-temples-aerial.jpg",
        "Dilwara temples in the hills of Mount Abu",
      ),
      photo(rajasthan, "mount-abu-nakki-lake.jpg", "Nakki Lake, Mount Abu"),
      photo(rajasthan, "jodhpur-mehrangarh-fort.jpg", "Mehrangarh Fort, Jodhpur"),
      photo(rajasthan, "jodhpur-mehrangarh-corridor.jpg", "A corridor inside Mehrangarh Fort, Jodhpur"),
      photo(rajasthan, "jaisalmer-fort-architecture.jpg", "Sandstone architecture of Jaisalmer Fort"),
      photo(rajasthan, "jaisalmer-city-from-fort.jpg", "Jaisalmer seen from the fort"),
      photo(
        rajasthan,
        "jaisalmer-thar-desert-camel-caravan-sunset.jpg",
        "Camels at sunset in the Thar desert near Jaisalmer",
      ),
    ],
    days: [
      {
        title: "Day 01: Arrival Delhi – Jaipur",
        body: "Arrive at New Delhi airport and proceed to the Pink City of Jaipur (265 km / 5 hrs). En route to the Amber Fort, enjoy an elephant ride here. Upon arrival at Jaipur, transfer to the hotel. The evening is at leisure to explore the attractive colorful market of Jaipur.",
      },
      {
        title: "Day 02: Jaipur – Ajmer – Pushkar",
        body: "Post breakfast, visit City Palace, Albert Hall, Hawa Mahal and Jantar Mantar. Later, proceed to Ajmer (135 km / 3 hrs), visit the famous Dargah of Salim Chisti, and then drive to Pushkar (11 km). Visit the only Brahma Temple in India and Pushkar Lake.",
      },
      {
        title: "Day 03: Pushkar – Udaipur",
        body: "In the morning drive to Udaipur (286 km / 6 hrs). It was the capital of the Sawai Dynasty. Upon arrival, check into the hotel. The evening is at leisure.",
      },
      {
        title: "Day 04: Udaipur",
        body: "After breakfast, visit the famous Jagdish Temple, which enshrines a black stone image of Lord Vishnu as Jagannath, Lord of the universe, the City Palace, the museum and Saheliyon ki Bari – the Gardens of the Maidens.",
      },
      {
        title: "Day 05: Udaipur – Mount Abu",
        body: "In the morning drive to Mount Abu (190 km / 4.5 hrs), the only hill station in Rajasthan, at an altitude of 1,220 m, crowning the highest peak of the Aravalli hills. Upon arrival, check into the hotel. Later, visit the magnificent Dilwara Jain Temples, built in the 11th century, Sunset Point and Nakki Lake.",
      },
      {
        title: "Day 06: Mount Abu – Jodhpur",
        body: "After breakfast, depart to Jodhpur (325 km / 7 hrs), the second largest city in Rajasthan. Visit Mehrangarh Fort and the Umaid Bhawan Palace Museum.",
      },
      {
        title: "Day 07: Jodhpur – Jaisalmer",
        body: "In the morning drive towards Jaisalmer (285 km / 7 hrs). Upon arrival, check in at the hotel. The evening is at leisure.",
      },
      {
        title: "Day 08: Jaisalmer",
        body: "In the morning visit Jaisalmer Fort, the only fort in India which has a population of a thousand people living within its walls. Later, visit the havelis spread across Jaisalmer, reputed as the city’s real showpieces. In the evening visit the sand dunes to witness a spectacular sunset over the dunes.",
      },
      {
        title: "Day 09: Jaisalmer – Bikaner",
        body: "Early morning proceed to Bikaner (332 km / 7 hrs). Upon arrival, transfer to the hotel. Later, visit the unusual Junagarh Fort. Unlike all the major forts of Rajasthan, which are on hilltops, Junagarh Fort was built on the desert plains itself. Lastly, visit the National Research Centre on Camel.",
      },
      {
        title: "Day 10: Bikaner – Delhi",
        body: "In the morning drive to Delhi (475 km / 9 hrs) and transfer to the airport for your onward journey.",
      },
    ],
    enquireHref: whatsappHref(
      "Hello, I would like to enquire about the Rajasthan Heritage Explorer (9 nights / 10 days), departing from Delhi Airport.",
    ),
  },
  {
    slug: tourLinks[2].slug,
    href: tourLinks[2].href,
    title: "Spiritual Sojourn",
    category: "Char Dham",
    duration: "11 nights / 12 days",
    durationShort: "11N / 12D",
    excerpt:
      "A 12-day Char Dham journey through the sacred sites and traditions of Sanatan Dharma.",
    description:
      "This tour explores key spiritual sites and timeless traditions of Sanatan Dharma. It is a 12-day Char Dham route from Delhi through Haridwar and on to Gangotri, Yamunotri, Kedarnath and Badrinath.",
    departure: "Delhi Airport",
    cover: photo(
      spiritual,
      "haridwar-har-ki-pauri.jpg",
      "Crowds on the Ganges ghats at Haridwar",
    ),
    route: ["Delhi", "Haridwar", "Gangotri", "Yamunotri", "Kedarnath", "Badrinath"],
    vehicle: "Toyota Innova Crysta",
    itineraryNote:
      "Itinerary on request / coming soon. A day-by-day programme was not published for this journey. The route takes in Delhi, Haridwar, Gangotri, Yamunotri, Kedarnath and Badrinath. Message us and we will share the days, driving times and stays.",
    photos: [
      photo(spiritual, "haridwar-har-ki-pauri.jpg", "Crowds on the Ganges ghats at Haridwar"),
      photo(spiritual, "rishikesh-ganges-mountains.jpg", "The Ganges and the hills at Rishikesh"),
      photo(spiritual, "rishikesh-ram-jhula-bridge.jpg", "A suspension bridge over the Ganges at Rishikesh"),
      photo(spiritual, "rishikesh-ganges-sunset.jpg", "The river at Rishikesh at sunset"),
      photo(spiritual, "rishikesh-ganga-ghat-temple.jpg", "A temple ghat on the Ganges at Rishikesh"),
      photo(spiritual, "rishikesh-meditation-by-ganges.jpg", "People meditating beside the Ganges"),
      photo(spiritual, "rishikesh-yoga-by-ganges.jpg", "Yoga on the rocky bank of the Ganges"),
      photo(spiritual, "varanasi-ganga-aarti.jpg", "Evening Ganga Aarti on the ghats of Varanasi"),
      photo(spiritual, "varanasi-ghats-golden-hour.jpg", "Varanasi ghats in golden hour light"),
      photo(spiritual, "varanasi-ganges-boat-sunrise.jpg", "A boat on the Ganges at sunrise, Varanasi"),
      photo(spiritual, "varanasi-ghats-sunrise-sage.jpg", "Sunrise on the ghats of Varanasi"),
      photo(spiritual, "varanasi-darbhanga-ghat-boats.jpg", "Boats at Darbhanga Ghat, Varanasi"),
    ],
    days: null,
    enquireHref: whatsappHref(
      "Hello, I would like to enquire about the Spiritual Sojourn Char Dham tour (11 nights / 12 days), departing from Delhi Airport. Please share the day-by-day itinerary.",
    ),
  },
];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export const priceOnRequest = priceLabel;
