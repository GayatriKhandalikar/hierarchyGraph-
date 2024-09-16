graph-backend/
├── config/
│   └── db.js             # MongoDB connection
├── controllers/
│   └── dataController.js  # Data handling logic
├── models/
│   └── dataSchema.js           # Data schema
├── routes/
│   └── dataRoutes.js     # API routes
├── Data.js               # graph data for seeding
├── seed.js               # Seed data script
├── server/
│   └── server.js         # Server setup
├── .env                  # Environment variables
└── package.json          # Project config

README.md           # Project documentation


graph-backend/
├── src/
│   ├── config/
│   │   └── db.js          # MongoDB connection
│   ├── controllers/
│   │   └── dataController.js  # Handles data fetching logic
│   ├── models/
│   │   └── dataModel.js   # Mongoose model for graph data
│   ├── routes/
│   │   └── dataRoutes.js  # Express routes
│   ├── seed.js            # Script to seed the database
│   └── server.js          # Express server setup
├── tests/
│   └── data.test.js       # API tests
├── .env                # Environment variables
├── package.json        # Project dependencies and scripts
└── README.md 