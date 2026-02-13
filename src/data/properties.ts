import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  price: string;
  priceValue: number;
  location: string;
  type: "Villa" | "Penthouse" | "Estate" | "Chalet" | "Apartment" | "Mansion";
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  amenities: string[];
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
  };
}

export const properties: Property[] = [
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    price: "$4,850,000",
    priceValue: 4850000,
    location: "Manhattan, New York",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    image: property1,
    images: [property1, property5],
    description: "Perched atop one of Manhattan's most prestigious addresses, this penthouse offers sweeping panoramic views of the city skyline. Featuring floor-to-ceiling windows, an open-concept living area with Italian marble floors, a gourmet chef's kitchen with Gaggenau appliances, and a private terrace perfect for entertaining. The master suite boasts a spa-inspired bathroom with soaking tub and walk-in closet designed by a renowned architect.",
    shortDescription: "Stunning penthouse with panoramic skyline views and premium finishes throughout.",
    amenities: ["Private Terrace", "Concierge", "Wine Cellar", "Fitness Center", "Valet Parking", "Smart Home"],
    agent: { name: "Victoria Harrington", title: "Senior Luxury Advisor", phone: "+1 (212) 555-0187", email: "victoria@prestige.com" },
  },
  {
    id: "mediterranean-villa",
    title: "Mediterranean Villa",
    price: "$6,200,000",
    priceValue: 6200000,
    location: "Beverly Hills, California",
    type: "Villa",
    bedrooms: 6,
    bathrooms: 5,
    area: "5,800 sq ft",
    image: property2,
    images: [property2],
    description: "An exquisite Mediterranean-style villa set behind private gates in the heart of Beverly Hills. This estate features a grand courtyard entrance with fountain, hand-painted tile work, soaring arched ceilings, and a chef's kitchen that opens to lush gardens. The grounds include a resort-style pool, outdoor kitchen, and manicured gardens with mature olive trees.",
    shortDescription: "Elegant Mediterranean estate with courtyard, pool, and manicured gardens.",
    amenities: ["Pool & Spa", "Guest House", "Wine Room", "Home Theater", "3-Car Garage", "Gardens"],
    agent: { name: "James Worthington", title: "Principal Broker", phone: "+1 (310) 555-0234", email: "james@prestige.com" },
  },
  {
    id: "oceanfront-retreat",
    title: "Oceanfront Retreat",
    price: "$8,750,000",
    priceValue: 8750000,
    location: "Malibu, California",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 6,
    area: "4,500 sq ft",
    image: property3,
    images: [property3],
    description: "Wake up to the sound of waves in this breathtaking oceanfront retreat. Modern architecture meets coastal elegance with walls of glass framing unobstructed Pacific Ocean views. Features include an infinity-edge pool that appears to merge with the ocean, a private beach access path, and expansive outdoor living spaces designed for the ultimate California lifestyle.",
    shortDescription: "Modern beachfront estate with infinity pool and private beach access.",
    amenities: ["Infinity Pool", "Private Beach", "Outdoor Kitchen", "Elevator", "Smart Home", "Solar Panels"],
    agent: { name: "Victoria Harrington", title: "Senior Luxury Advisor", phone: "+1 (212) 555-0187", email: "victoria@prestige.com" },
  },
  {
    id: "alpine-chalet",
    title: "Alpine Luxury Chalet",
    price: "$5,400,000",
    priceValue: 5400000,
    location: "Aspen, Colorado",
    type: "Chalet",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,200 sq ft",
    image: property4,
    images: [property4],
    description: "Nestled in the mountains of Aspen, this luxury chalet combines rustic warmth with modern sophistication. Featuring reclaimed timber beams, floor-to-ceiling stone fireplaces, and walls of glass showcasing breathtaking mountain views. The gourmet kitchen, heated outdoor pool, and ski-in/ski-out access make this the ultimate mountain retreat.",
    shortDescription: "Stunning mountain chalet with ski-in/ski-out access and panoramic views.",
    amenities: ["Ski Access", "Heated Pool", "Wine Cellar", "Home Theater", "Fireplace", "Hot Tub"],
    agent: { name: "Alexander Cole", title: "Mountain Properties Specialist", phone: "+1 (970) 555-0156", email: "alex@prestige.com" },
  },
  {
    id: "manhattan-residence",
    title: "Manhattan Residence",
    price: "$3,200,000",
    priceValue: 3200000,
    location: "Upper East Side, New York",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,800 sq ft",
    image: property5,
    images: [property5, property1],
    description: "An impeccably designed residence in one of New York's most coveted addresses. This home features museum-quality finishes, a custom library, chef's kitchen with top-of-the-line appliances, and stunning views of the city that never sleeps. The building offers white-glove service including 24-hour concierge, private dining room, and rooftop terrace.",
    shortDescription: "Impeccably designed residence with stunning city views and white-glove service.",
    amenities: ["24hr Concierge", "Rooftop Terrace", "Private Dining", "Library", "Gym", "Doorman"],
    agent: { name: "Victoria Harrington", title: "Senior Luxury Advisor", phone: "+1 (212) 555-0187", email: "victoria@prestige.com" },
  },
  {
    id: "countryside-estate",
    title: "Countryside Estate",
    price: "$12,500,000",
    priceValue: 12500000,
    location: "Greenwich, Connecticut",
    type: "Estate",
    bedrooms: 8,
    bathrooms: 10,
    area: "12,000 sq ft",
    image: property6,
    images: [property6],
    description: "A magnificent estate set on 5 acres of meticulously landscaped grounds in the prestigious backcountry of Greenwich. This Georgian Colonial masterpiece features a grand foyer with sweeping staircase, formal living and dining rooms, a paneled library, and a chef's kitchen. The property includes a pool house, tennis court, and carriage house with guest quarters.",
    shortDescription: "Magnificent Georgian Colonial on 5 acres with pool, tennis court, and guest house.",
    amenities: ["Tennis Court", "Pool House", "Guest Quarters", "Library", "Wine Cellar", "5 Acres"],
    agent: { name: "James Worthington", title: "Principal Broker", phone: "+1 (310) 555-0234", email: "james@prestige.com" },
  },
];

export const locations = ["All Locations", "Manhattan, New York", "Beverly Hills, California", "Malibu, California", "Aspen, Colorado", "Upper East Side, New York", "Greenwich, Connecticut"];
export const propertyTypes = ["All Types", "Villa", "Penthouse", "Estate", "Chalet", "Apartment", "Mansion"];
export const budgetRanges = ["Any Budget", "Under $5M", "$5M - $8M", "$8M - $10M", "Over $10M"];
