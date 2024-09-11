const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

  export const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "Generate Travel Plan for Location : Santorini, Greece, for 4 Days and 3 Night for A Couple with a Luxury budget with a Flight details , Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 4 days and 3 night with each day plan with best time to visit in JSON format.\n\n",
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: '```json\n{\n  "flight": {\n    "airline": "Aegean Airlines",\n    "flight_number": "A3 456",\n    "departure_city": "London",\n    "departure_airport": "Heathrow Airport (LHR)",\n    "arrival_city": "Santorini",\n    "arrival_airport": "Santorini Airport (JTR)",\n    "departure_date": "2024-04-25",\n    "arrival_date": "2024-04-25",\n    "price": "£450",\n    "booking_url": "https://www.aegeanair.com/"\n  },\n  "hotel": [\n    {\n      "name": "Aenaon Villas",\n      "address": "Firostefani, Santorini 847 00, Greece",\n      "price": "€500 per night",\n      "image_url": "https://www.aenaonvillas.com/images/gallery/aenaon-villas-santorini-greece-luxury-hotel-1.jpg",\n      "geo_coordinates": [36.4251, 25.4369],\n      "rating": 4.8,\n      "description": "Aenaon Villas offer breathtaking views of the caldera and Aegean Sea. Each villa features private pools, luxurious amenities, and exceptional service."\n    },\n    {\n      "name": "Canaves Oia",\n      "address": "Oia, Santorini 847 02, Greece",\n      "price": "€800 per night",\n      "image_url": "https://www.canaves.com/oia/images/gallery/canaves-oia-santorini-greece-luxury-hotel-1.jpg",\n      "geo_coordinates": [36.4261, 25.4343],\n      "rating": 5,\n      "description": "Perched on the cliffs of Oia, Canaves Oia offers a unique and intimate experience. Enjoy stunning sunsets, exquisite dining, and unparalleled luxury."\n    },\n    {\n      "name": "Grace Hotel",\n      "address": "Imerovigli, Santorini 847 00, Greece",\n      "price": "€650 per night",\n      "image_url": "https://www.gracehotel.com/images/gallery/grace-hotel-santorini-greece-luxury-hotel-1.jpg",\n      "geo_coordinates": [36.4238, 25.4325],\n      "rating": 4.9,\n      "description": "Grace Hotel boasts a prime location with panoramic views of the caldera. Indulge in their award-winning cuisine, spa treatments, and personalized service."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "title": "Arrival & Santorini Sunset",\n      "description": "Arrive at Santorini Airport (JTR) and transfer to your luxury hotel. After settling in, enjoy a leisurely afternoon exploring the charming village of Oia. Take a stroll through the narrow cobblestone streets, admire the white-washed houses, and shop for local souvenirs. As the sun begins to set, find a spot with breathtaking views of the caldera and witness the legendary Santorini sunset.",\n      "places": [\n        {\n          "name": "Oia Village",\n          "details": "A picturesque village with stunning sunset views and charming shops and restaurants.",\n          "image_url": "https://www.santorini.com/wp-content/uploads/2019/02/oia_sunset.jpg",\n          "geo_coordinates": [36.4261, 25.4343],\n          "ticket_pricing": "Free",\n          "time_to_travel": "2 hours"\n        }\n      ],\n      "best_time_to_visit": "Evening (for sunset)"\n    },\n    {\n      "day": 2,\n      "title": "Caldera Cruise & Volcano Hike",\n      "description": "Embark on a luxury caldera cruise, exploring the volcanic islands of Nea Kameni and Palea Kameni. Hike to the summit of Nea Kameni, experiencing the volcanic landscape and unique hot springs. Enjoy a delicious lunch onboard the cruise and swim in the crystal-clear waters of the Aegean Sea.",\n      "places": [\n        {\n          "name": "Nea Kameni",\n          "details": "A volcanic island with active hot springs and breathtaking views of the caldera.",\n          "image_url": "https://www.santorini.com/wp-content/uploads/2019/02/nea-kameni-volcano-santorini.jpg",\n          "geo_coordinates": [36.3999, 25.4368],\n          "ticket_pricing": "€50 per person",\n          "time_to_travel": "4 hours"\n        },\n        {\n          "name": "Palea Kameni",\n          "details": "An uninhabited volcanic island with ancient ruins and natural hot springs.",\n          "image_url": "https://www.santorini.com/wp-content/uploads/2019/02/palea-kameni-volcano-santorini.jpg",\n          "geo_coordinates": [36.3881, 25.4386],\n          "ticket_pricing": "Free",\n          "time_to_travel": "2 hours"\n        }\n      ],\n      "best_time_to_visit": "Morning"\n    },\n    {\n      "day": 3,\n      "title": "Santorini Wine Tour & Authentic Cuisine",\n      "description": "Experience the unique flavors of Santorini by joining a wine tour. Visit renowned wineries, sample award-winning wines, and learn about the island\'s viticultural history. Enjoy a delectable lunch at a traditional taverna, savoring authentic Greek cuisine.",\n      "places": [\n        {\n          "name": "Santo Wines",\n          "details": "A renowned winery with stunning views and exceptional wines.",\n          "image_url": "https://www.santowines.gr/wp-content/uploads/2019/02/winery-santorini-wines.jpg",\n          "geo_coordinates": [36.4118, 25.4531],\n          "ticket_pricing": "€30 per person",\n          "time_to_travel": "3 hours"\n        },\n        {\n          "name": "Gaia Wines",\n          "details": "A family-owned winery with a passion for sustainable practices and exceptional wines.",\n          "image_url": "https://www.gaiawines.gr/wp-content/uploads/2019/02/winery-gaia-wines.jpg",\n          "geo_coordinates": [36.4162, 25.4483],\n          "ticket_pricing": "€25 per person",\n          "time_to_travel": "2 hours"\n        }\n      ],\n      "best_time_to_visit": "Afternoon"\n    },\n    {\n      "day": 4,\n      "title": "Fira Town & Departure",\n      "description": "Explore the bustling town of Fira, the island\'s capital. Discover charming shops, art galleries, and traditional cafes. Enjoy a delicious lunch with stunning views of the caldera. Take a leisurely stroll along the scenic caldera rim before heading to Santorini Airport (JTR) for your departure flight.",\n      "places": [\n        {\n          "name": "Fira Town",\n          "details": "The capital of Santorini, offering a vibrant atmosphere, stunning views, and diverse shopping and dining options.",\n          "image_url": "https://www.santorini.com/wp-content/uploads/2019/02/fira-town-santorini.jpg",\n          "geo_coordinates": [36.4251, 25.4369],\n          "ticket_pricing": "Free",\n          "time_to_travel": "3 hours"\n        }\n      ],\n      "best_time_to_visit": "Morning"\n    }\n  ]\n}\n```\n\n**Explanation of the JSON structure:**\n\n* **flight:** Contains information about the flight, including airline, flight number, departure/arrival cities and airports, dates, price, and booking URL.\n* **hotel:** Lists hotel options with their name, address, price, image URL, geo-coordinates, rating, and a brief description.\n* **itinerary:** Provides a detailed 4-day itinerary with plans for each day, including:\n    * **day:** The day number in the itinerary.\n    * **title:** A brief title for the day\'s plan.\n    * **description:** A detailed description of the activities and experiences planned for the day.\n    * **places:** A list of places to visit on that day, with information about the place\'s name, details, image URL, geo-coordinates, ticket pricing, and estimated time to spend there.\n    * **best_time_to_visit:** Suggests the ideal time of day to visit the places mentioned in the plan.\n\n**Note:** The prices, booking URLs, and image URLs are illustrative and may change. You should consult relevant websites for updated information and make your own bookings. \n',
          },
        ],
      },
    ],
  });

