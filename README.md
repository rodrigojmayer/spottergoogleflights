✈️ Google Flights Clone

A responsive web application replicating the core functionality and UI design of Google Flights, built with React, TypeScript, and Material UI (MUI).
It allows users to search for flights, filter results, sort by best/cheapest, and view detailed itinerary information.

📌 Features

🔍 Flight Search

Search flights by departure, destination, and dates.

One-way and round-trip support.

🎯 Filters & Sorting

Filter by stops, airlines, baggage, price, times, emissions, connecting airports, and duration.

Sort by Best or Cheapest flights.

🛬 Flight Details

View departure/arrival times, duration, carriers, and price.

Leg-by-leg breakdown for multi-stop itineraries.

📱 Responsive Design

Mobile-friendly layout using MUI’s responsive system.

🛠 Tech Stack

Frontend: React (with Hooks), TypeScript

UI Components: Material UI (MUI v5)

State Management: React Context API

Routing: React Router

API: Custom fetchFlightsByQuery & fetchAirportsByQuery services

Date Handling: Native Date + formatting utilities

🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/google-flights-clone.git
cd google-flights-clone

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm run dev


By default, the app runs on http://localhost:5173 (Vite) or http://localhost:3000 (CRA).

⚙️ Configuration

API Endpoints:
The app uses different endpoints for development and production.

Development APIs are stored in src/services/DEV/ (mock data).

Production APIs are in src/services/ without the DEV folder.

Ignoring DEV folder in Git:
The development folder is excluded from version control via .gitignore:

src/services/DEV/

📈 Future Improvements

✅ Real-time price updates

✅ Integration with live airline APIs

✅ Authentication for saved searches

✅ Multi-city trip support

📄 License

This project is for educational purposes only.