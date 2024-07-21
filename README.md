# Nutrition Tracker

A full-stack nutrition tracker application developed using Express, MongoDB, bcrypt, JWT, and React.

## Features

- User authentication with JWT
- Dynamic food search
- Track daily dietary intake (calories, protein, carbs, fats, fiber)
- Responsive design for mobile and desktop

## Tech Stack

**Frontend:**
- React
- Axios
- Context API

**Backend:**
- Node.js
- Express
- MongoDB
- Mongoose
- bcrypt
- JWT

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nikhilkalburgi45/nutrition-tracker.git
   cd nutrition-tracker

2 Install backend dependencies:

cd backend
npm install


3 Install frontend dependencies:

cd ../frontend
npm install


Setup
Environment Variables:

Create a .env file in the backend directory and add the following:

MONGO_URI=mongodb://localhost:27017/nutrify
JWT_SECRET=your_secret_key
PORT=8000
Run the backend server:

cd backend
npm start
Run the frontend server:

cd ../frontend
npm start

API Endpoints :-

Authentication:
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user

Food:
GET /foods/:search - Search for food items

Diet:
GET /track/:userId/:date - Get food items consumed on a specific date


    
Usage
Register a new user.
Login with the registered user credentials.
Search for food items and track dietary intake.
View nutrition details for consumed food items.



Contributing
Contributions are welcome! Please fork the repository and create a pull request.

License
This project is licensed under the MIT License.

Developed by Your Name Nikhil

