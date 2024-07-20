# Backend Folder Structure

nutrition-tracker/
├── config/
│ └── db.js
├── controllers/
│ ├── authController.js
│ ├── foodController.js
│ └── trackingController.js
├── middlewares/
│ └── authMiddleware.js
├── models/
│ ├── userModel.js
│ ├── foodModel.js
│ └── trackingModel.js
├── routes/
│ ├── authRoutes.js
│ ├── foodRoutes.js
│ └── trackingRoutes.js
├── utils/
│ └── generateToken.js
├── .env
├── app.js
└── server.js

http://localhost:8000/api/auth/login post
http://localhost:8000/api/auth/register post

http://localhost:8000/api/foods get
http://localhost:8000/api/foods/:name get

http://localhost:8000/api/tracking/track post

http://localhost:8000/api/tracking/:userid/:date get
