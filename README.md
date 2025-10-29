***BACKEND FOLDER STRUCTURE***

bookit-backend/
│
├── package.json
├── tsconfig.json              # (if using TypeScript)
├── .env                       # DB credentials, secrets
├── server.js / server.ts      # Entry point
│
├── src/
│   ├── config/
│   │   └── db.js              # MySQL connection setup
│   │
│   ├── routes/
│   │   ├── experienceRoutes.js
│   │   ├── bookingRoutes.js
│   │   └── promoRoutes.js
│   │
│   ├── controllers/
│   │   ├── experienceController.js
│   │   ├── bookingController.js
│   │   └── promoController.js
│   │
│   ├── models/
│   │   ├── Experience.js
│   │   ├── Booking.js
│   │   └── Promo.js
│   │
│   └── utils/
│       └── validate.js
│
└── README.md
