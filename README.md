# 🏛 Namma Hebri – Taluk Information Portal

Namma Hebri is a structured, web application that provides complete digital information about Hebri Taluk and its villages.  

The platform centralizes village information, essential services, temples, emergency contacts, government offices, business listings, agriculture support, and community updates into a single responsive portal.

---

## 🚀 Tech Stack

- React JS (Functional Components + Hooks)
- React Router
- Bootstrap 5
- Custom CSS
- Firebase (Initialized for future Firestore integration)
- Local constant data files (Current data source)

---

## 🏡 Core Features

### Village Information
- Village profile pages
- Google Maps embed
- Population details
- Panchayat information
- Emergency contacts
- Nearby towns
- Transport availability
- Important places
- Village-wise services and temples

### Services Directory
Includes categorized listings:

- Education
- Healthcare
- Daily Needs
- Local Services
- Emergency & Safety
- Government Offices
- Tourism & Cultural
- Business & Employment
- Agriculture & Farmer Support
- Advanced Human Needs
- Community Engagement

Each listing contains:
- Name
- Category & Subcategory
- Type (Government / Private / NGO)
- Village
- Address
- Contact
- Image
- Location coordinates

### Temples Module
- Temple listing page
- Temple detail page
- Deity information
- History
- Pooja timings
- Festival details
- Location map
- Nearby temples filter

---

## 🔎 Filtering & Sorting

- Search by name
- Filter by category
- Filter by subcategory
- Filter by village
- Filter by type
- Sort A–Z / Z–A
- Sort by nearest (Location-based)

---

## 📍 Location-Based Features

- Browser Geolocation API
- Haversine formula for distance calculation
- Displays distance in KM
- Sort by nearest services or temples

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/namma-hebr i.git
cd namma-hebr i
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

---

## 🔐 Firebase Configuration

Create a Firebase project and update:

```
src/firebase/firebaseConfig.js
```

Firestore integration can be enabled in future versions.

---

## 📌 Future Enhancements

- Admin dashboard
- Firestore integration
- Authentication system
- Review & rating system
- Kannada language support
- Event calendar
- Mobile app version
- Deployment on Vercel or Firebase Hosting

---

## 📄 License

This project is intended for community and educational use.

---

## 👨‍💻 Author

Sachin Kumar
