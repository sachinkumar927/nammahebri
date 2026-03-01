export const agriCategories = ["All", "Services", "Schemes", "Markets", "Technology"];

export const agriData = [
    // 2. Machinery & Supply
    {
        id: 1,
        name: "Precision Crop Cutters",
        category: "Technology",
        type: "Machinery",
        village: "Hebri",
        image: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=400",
        desc: "High-efficiency automated cutters for paddy and areca nut.",
        price: "Subsidy Available"
    },
    // 3. Farmer Services
    {
        id: 2,
        name: "Hebri Soil Testing Center",
        category: "Services",
        type: "Lab",
        village: "Hebri",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
        desc: "Free soil health cards and nutrient analysis for local farmers.",
        contact: "08253-XXXXXX"
    },
    // 4. Government Schemes
    {
        id: 3,
        name: "PM-Kisan Samman Nidhi",
        category: "Schemes",
        type: "Financial",
        village: "All Villages",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b6707fe?w=400",
        desc: "Direct benefit transfer of ₹6,000 per year to farmer accounts.",
        status: "Active"
    },
    // 5. Markets
    {
        id: 4,
        name: "Hebri Weekly Santhe",
        category: "Markets",
        type: "Local Market",
        village: "Hebri",
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400",
        desc: "Direct farm-to-consumer market every Monday.",
        timing: "6:00 AM - 2:00 PM"
    },
    // 6. Irrigation
    {
        id: 5,
        name: "Seethanadi Canal Project",
        category: "Services",
        type: "Irrigation",
        village: "Kuchur",
        image: "https://images.unsplash.com/photo-1434139210052-78d120a1a0f8?w=400",
        desc: "Major water resource supporting paddy cultivation in the belt.",
        source: "Seethanadi River"
    }
];

export const agriStats = [
    { label: "Main Crop", value: "Paddy & Areca" },
    { label: "Water Source", value: "Seethanadi" },
    { label: "Machinery", value: "Drone Ready" }
];