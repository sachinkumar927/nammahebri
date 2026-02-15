export interface Temple {
  id: string;
  templeName: string;
  deityName: string;
  village: string;
  address: string;
  history: string;
  establishedYear?: number;
  poojaTimings: string;
  festivalDetails: { name: string; month: string; description: string }[];
  contactNumber: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  images: string[];
  badges: ("Ancient Temple" | "Heritage Temple" | "Major Festival Temple")[];
}

export const templesData: Temple[] = [
  {
    id: "mahaganapathi",
    templeName: "Sri Mahaganapathi Temple",
    deityName: "Lord Ganesha",
    village: "Hebri",
    address: "Main Road, Hebri Town",
    history: "One of the oldest temples in Hebri taluk, this temple has been a center of devotion for centuries. The idol is believed to be self-manifested (Swayambhu).",
    establishedYear: 1200,
    poojaTimings: "Morning: 6:00 AM - 12:00 PM | Evening: 5:00 PM - 8:30 PM",
    festivalDetails: [
      { name: "Ganesh Chaturthi", month: "August/September", description: "Grand 5-day celebration with special poojas and cultural programs." },
      { name: "Annual Rathotsava", month: "February", description: "Chariot festival with thousands of devotees." },
    ],
    contactNumber: "08256-232500",
    latitude: 13.4315,
    longitude: 74.9900,
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
    images: ["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400"],
    badges: ["Ancient Temple", "Major Festival Temple"],
  },
  {
    id: "durgaparameshwari",
    templeName: "Sri Durgaparameshwari Temple",
    deityName: "Goddess Durga",
    village: "Mundaje",
    address: "Temple Road, Mundaje",
    history: "A powerful Shakti temple known for its divine energy. Devotees from across the region visit for blessings.",
    establishedYear: 1350,
    poojaTimings: "Morning: 6:30 AM - 1:00 PM | Evening: 4:30 PM - 8:00 PM",
    festivalDetails: [
      { name: "Navaratri", month: "October", description: "Nine nights of worship with special Durga Pooja." },
      { name: "Deepotsava", month: "December", description: "Festival of lights celebrated with grand illumination." },
    ],
    contactNumber: "08256-245500",
    latitude: 13.3990,
    longitude: 75.0240,
    imageUrl: "https://images.unsplash.com/photo-1609766856923-7e0a7f49a793?w=800",
    images: ["https://images.unsplash.com/photo-1609766856923-7e0a7f49a793?w=400"],
    badges: ["Heritage Temple", "Major Festival Temple"],
  },
  {
    id: "mahalingeshwara",
    templeName: "Sri Mahalingeshwara Temple",
    deityName: "Lord Shiva",
    village: "Siddapura",
    address: "Hill Top, Siddapura",
    history: "Perched on a hilltop, this Shiva temple offers breathtaking views of the Western Ghats. A sacred site for Shaiva devotees.",
    establishedYear: 1100,
    poojaTimings: "Morning: 5:30 AM - 11:30 AM | Evening: 5:00 PM - 8:00 PM",
    festivalDetails: [
      { name: "Maha Shivaratri", month: "February/March", description: "All-night vigil with continuous abhisheka and bhajans." },
    ],
    contactNumber: "08256-251500",
    latitude: 13.4560,
    longitude: 74.9630,
    imageUrl: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800",
    images: ["https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=400"],
    badges: ["Ancient Temple"],
  },
  {
    id: "venkatramana",
    templeName: "Sri Venkatramana Temple",
    deityName: "Lord Vishnu",
    village: "Hebri",
    address: "Market Road, Hebri",
    history: "A Vaishnavite temple dedicated to Lord Venkatramana (Vishnu), serving as a spiritual center for the local community.",
    poojaTimings: "Morning: 7:00 AM - 12:00 PM | Evening: 5:30 PM - 8:00 PM",
    festivalDetails: [
      { name: "Vaikuntha Ekadashi", month: "December/January", description: "Grand celebration with special darshana." },
    ],
    contactNumber: "08256-232600",
    latitude: 13.4320,
    longitude: 74.9910,
    imageUrl: "https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=800",
    images: ["https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=400"],
    badges: ["Heritage Temple"],
  },
  {
    id: "nagadevata",
    templeName: "Nagadevata Shrine",
    deityName: "Naga Devata",
    village: "Nadpal",
    address: "Forest Path, Nadpal",
    history: "An ancient serpent deity shrine surrounded by sacred groves. The shrine is maintained by the local community.",
    establishedYear: 900,
    poojaTimings: "Morning: 8:00 AM - 11:00 AM | Evening: 4:00 PM - 6:30 PM",
    festivalDetails: [
      { name: "Naga Panchami", month: "July/August", description: "Special serpent worship with milk offerings." },
    ],
    contactNumber: "08256-260200",
    latitude: 13.4110,
    longitude: 75.0460,
    imageUrl: "https://images.unsplash.com/photo-1590078473908-cd3a4a4419ac?w=800",
    images: ["https://images.unsplash.com/photo-1590078473908-cd3a4a4419ac?w=400"],
    badges: ["Ancient Temple"],
  },
  {
    id: "subrahmanya",
    templeName: "Sri Subrahmanya Temple",
    deityName: "Lord Subrahmanya",
    village: "Chara",
    address: "Near Chara Falls, Chara",
    history: "Located near the scenic Chara falls, this temple dedicated to Lord Subrahmanya attracts devotees and tourists alike.",
    establishedYear: 1400,
    poojaTimings: "Morning: 6:00 AM - 12:30 PM | Evening: 4:30 PM - 7:30 PM",
    festivalDetails: [
      { name: "Subramanya Shashti", month: "November/December", description: "Major festival with special serpent poojas." },
      { name: "Annual Fair", month: "January", description: "Village fair with cultural programs." },
    ],
    contactNumber: "08256-270300",
    latitude: 13.4655,
    longitude: 74.9405,
    imageUrl: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800",
    images: ["https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=400"],
    badges: ["Heritage Temple", "Major Festival Temple"],
  },
  {
    id: "bhagavathi",
    templeName: "Sri Bhagavathi Temple",
    deityName: "Goddess Bhagavathi",
    village: "Mundaje",
    address: "South End, Mundaje",
    history: "A renowned Devi temple with unique rituals performed during annual festivals.",
    establishedYear: 1250,
    poojaTimings: "Morning: 6:00 AM - 11:00 AM | Evening: 5:00 PM - 8:00 PM",
    festivalDetails: [
      { name: "Bhagavathi Seva", month: "March", description: "Theyyam-inspired ritual performances." },
    ],
    contactNumber: "08256-245600",
    latitude: 13.3970,
    longitude: 75.0220,
    imageUrl: "https://images.unsplash.com/photo-1567591370504-cc24db7dcc0c?w=800",
    images: ["https://images.unsplash.com/photo-1567591370504-cc24db7dcc0c?w=400"],
    badges: ["Ancient Temple", "Heritage Temple"],
  },
  {
    id: "lakshminarasimha",
    templeName: "Sri Lakshminarasimha Temple",
    deityName: "Lord Narasimha",
    village: "Belthangady Cross",
    address: "Junction Road, Belthangady Cross",
    history: "A Vaishnavite temple known for its powerful deity and beautiful architecture.",
    poojaTimings: "Morning: 7:00 AM - 12:00 PM | Evening: 5:00 PM - 7:30 PM",
    festivalDetails: [
      { name: "Narasimha Jayanti", month: "May", description: "Birth celebration of Lord Narasimha." },
    ],
    contactNumber: "08256-232700",
    latitude: 13.4205,
    longitude: 74.9755,
    imageUrl: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800",
    images: ["https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400"],
    badges: ["Heritage Temple"],
  },
];
