# 🏠 La Maison

## Full-Stack Real Estate Platform

La Maison is a full-stack real estate web application designed to help users discover, search, and manage property listings through a modern and responsive interface.

The application includes property browsing, search and filtering, user authentication, Google authentication, user profiles, favorites, contact inquiries, and role-based functionality.

🔗 **Live Demo:**  
https://lamaisonreal-estate.netlify.app

💻 **GitHub Repository:**  
https://github.com/ishat005/real-estate

---

## 📸 Screenshots

### 🏠 Homepage

![La Maison Homepage](./screenshots/homepage.png)

The homepage introduces the platform, displays property statistics and featured properties, and provides a search interface for users to find homes.

---

### 🏘️ Property Listings

![Property Listings](./screenshots/properties.png)

Users can browse available properties and search for homes based on location, property type, and budget.

---

### 🏡 Property Details

![Property Details](./screenshots/property-details.png)

Each property has a dedicated details page containing information such as price, location, bedrooms, bathrooms, area, images, and other property information.

---

### 🔐 Login

![Login Page](./screenshots/login.png)

Users can sign in using email/password authentication or Google authentication.

---

### 📝 Signup

![Signup Page](./screenshots/signup.png)

New users can create an account using email/password or Google authentication.

---

### 👤 User Profile

![User Profile](./screenshots/profile.png)

Authenticated users can access their profile and manage their personalized property information.

---

### ❤️ Favorites

![Favorites Section](./screenshots/favorites.png)

Authenticated users can save properties to their favorites and manage their saved properties from their account.

---

# ✨ Features

## 🏠 Property Discovery

- Browse available property listings
- View featured properties
- View detailed property information
- View property images
- View property prices
- View property locations
- View bedrooms and bathrooms
- View property area
- Access individual property detail pages

## 🔎 Search & Filtering

Users can search properties using:

- 📍 Location
- 🏘️ Property type
- 💰 Budget

Search criteria are passed to the property listing page to help users find relevant properties.

## ❤️ Favorites

Authenticated users can:

- Add properties to favorites
- Remove properties from favorites
- View saved properties
- Manage their favorite properties

Favorites are associated with the authenticated user's account.

## 🔐 Authentication

The application includes:

- User registration
- Email/password login
- Google authentication
- JWT-based authentication
- Protected routes
- Persistent authentication state
- Logout functionality
- User-specific functionality

## 👤 User Profiles

Authenticated users have access to their own profile and personalized property information.

## 🛡️ Role-Based Functionality

The application supports role-based functionality for different user workflows and protected operations.

## 📩 Contact Inquiries

Users can submit contact inquiries through the application.

Contact information is processed through the backend and integrated with EmailJS for notifications.

## 📱 Responsive Design

The application is designed to provide a responsive experience across:

- Desktop
- Tablet
- Mobile

---

# 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- React Router
- Tailwind CSS
- Vite
- React Icons

### Backend

- Node.js
- Express.js
- REST APIs
- JWT
- Mongoose

### Database

- MongoDB

### Authentication

- JWT Authentication
- Google OAuth

### Services & Deployment

- Netlify
- Render
- EmailJS

### Development Tools

- Git
- GitHub
- Postman
- VS Code

---

# 🏗️ Application Architecture

La Maison follows a client-server architecture where the React frontend communicates with the Node.js/Express backend through REST APIs.

```text
                    ┌──────────────────────┐
                    │      React App       │
                    │      Frontend        │
                    │                      │
                    │ React + Vite         │
                    │ Tailwind CSS         │
                    │ React Router         │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Express / Node    │
                    │       Backend        │
                    │                      │
                    │ Authentication       │
                    │ Property APIs        │
                    │ Favorites APIs       │
                    │ Contact APIs         │
                    └──────────┬───────────┘
                               │
                               │ Mongoose
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │       Database       │
                    └──────────────────────┘
```

---

# 🧩 Challenges & Solutions

### Frontend & Backend Integration

One of the main challenges was connecting the React frontend to a separate Node.js/Express backend. I implemented REST API communication and used environment variables to keep API configuration flexible between local development and production.

### CORS Configuration

Because the frontend and backend are deployed separately, cross-origin requests required proper CORS configuration. I configured the Express backend to allow requests from the appropriate frontend environments during development and deployment.

### Authentication

Implemented JWT-based authentication for email/password login and registration, along with Google authentication. Authentication state is managed through React Context so that user-specific features remain available throughout the application.

### Protected Routes & User-Specific Features

Implemented protected routes and API authorization for features that require authentication, including user profiles and saved properties. This ensures that users can only access functionality associated with their own accounts.

### Favorites System

Built a user-specific favorites system that allows authenticated users to add and remove properties. Favorite properties are stored in the backend and associated with the authenticated user.

### Search & Filtering

Implemented property search functionality using location, property type, and budget criteria. Search parameters are passed between the homepage and property listing page to provide a more consistent user experience.

### Google Authentication

Integrated Google OAuth into the authentication flow and connected the Google login/signup process with the application's existing authentication state.

### Responsive UI

Designed responsive layouts using Tailwind CSS so that property listings, navigation, authentication pages, forms, and other components adapt across desktop, tablet, and mobile screen sizes.

### Frontend Error Handling

Handled API failures and loading states in the React application so users receive appropriate feedback when property data or other backend requests cannot be loaded.

### Deployment & Environment Configuration

Deployed the frontend and backend as separate applications and configured environment variables so the application can switch between local development and the production API without changing the application code.

---

# 🚀 Run Locally

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB
- Git

Google OAuth credentials are required if you want to test Google authentication locally.

## Clone the Repository

```bash
git clone https://github.com/ishat005/real-estate.git
cd real-estate
```

## Install Dependencies

Install the dependencies for both the frontend and backend.

### Backend

```bash
cd backend
npm install
```

### Frontend

Open a new terminal and run:

```bash
cd frontend
npm install
```

## Environment Variables

Create the required `.env` files for the frontend and backend.

The application uses environment variables for API URLs, database configuration, authentication credentials, and other environment-specific settings.

> Do not commit `.env` files or sensitive credentials to GitHub.

## Start the Backend

From the `backend` folder:

```bash
npm run dev
```

## Start the Frontend

From the `frontend` folder:

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:5173
```

---

# 📁 Project Structure

```text
real-estate/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── screenshots/
│   ├── homepage.png
│   ├── properties.png
│   ├── property-details.png
│   ├── login.png
│   ├── signup.png
│   ├── profile.png
│   └── favorites.png
│
└── README.md
```

> The structure above represents the main organization of the project. Individual files may vary as the application continues to evolve.

---

# 🌐 Deployment

The application is deployed using separate frontend and backend services.

### Frontend

Deployed using Netlify.

🔗 https://lamaisonreal-estate.netlify.app

### Backend

Deployed using Render.

The frontend communicates with the deployed backend through REST APIs.

Environment variables are configured separately for local development and production.

---

# 🔮 Future Development

La Maison can be expanded with additional features as the platform evolves.

Potential future improvements include:

- 🗺️ Map-based property search
- 🔎 Advanced property filtering and sorting
- ⚖️ Property comparison
- 💰 Mortgage and payment calculator
- 🏢 Expanded admin dashboard
- 🏡 Property management functionality
- 🔑 Password reset and account recovery
- 📧 Additional email notifications
- 🔔 User notification system
- ♿ Additional accessibility improvements
- ⚡ Further frontend performance optimizations
- 🖼️ Improved property image management
- 👤 Additional user profile functionality
- 📱 Further mobile UX improvements

---

# 👩‍💻 Author

## Isha Thakur

Full-Stack Developer focused on building responsive and user-friendly web applications using React, Node.js, Express, and MongoDB.

### Portfolio

https://isha-thakur.netlify.app/

### GitHub

https://github.com/ishat005

### La Maison

https://lamaisonreal-estate.netlify.app

---

# 📌 Project Status

La Maison is an actively developed portfolio project demonstrating:

- Full-stack application development
- React frontend development
- Node.js and Express backend development
- REST API integration
- Authentication
- MongoDB database interaction
- Responsive UI development
- Deployment and environment configuration

Future features may be added as the project continues to evolve.