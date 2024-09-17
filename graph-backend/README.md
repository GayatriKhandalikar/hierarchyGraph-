# Hierarchy Graph Backend

## Overview

**Hierarchy Graph Backend** is a Node.js Express application designed to serve graph data from a MongoDB database. This project provides a robust API that can be used to interact with and retrieve graph-related data. It is built with modern technologies and is easy to extend or integrate with other systems.

## Features

- **Node.js and Express**: Fast, un opinionated, and minimal web framework.Hierarchy
- **MongoDB**: NoSQL database for storing graph data.
- **D3.js**: Integration with graph visualization libraries.
- **Mocha & Chai**: Comprehensive testing setup for both unit and API tests.
- **Environment Configuration**: Easily manage environment variables with `dotenv`.
- **Cross-Origin Resource Sharing (CORS)**: Enabled for secure API access.
 
## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/)

### 1. Clone the Repository

```bash
git clone  https://github.com/GayatriKhandalikar/hierarchyGraph-.git 

cd hierarchyGraph-/graph-backend
```

### 2. Install Dependencies

To install the necessary dependencies for the project, run the following command:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project and define the following environment variables:

```bash
PORT=4000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.pe2wn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

```

### 4. Seeding the Database

To populate the database with sample graph data, you can use the seeding script provided in the project. This script clears any existing data and inserts predefined sample data into your MongoDB database.

To seed the database, run the following command:

```bash
npm run seed
```

### 5. Running the Dev Server

To start the dev server, run the following command in your terminal:

```bash
npm start
```

### 6. Testing

To run the tests for this project, you can use the following commands:

- **Running Unit Tests**: To run the unit tests, use the following command:
  ```bash
  npm run test
  ```
## Project Structure

The project is organized into several key directories and files. Here's an overview of the structure:

```
graph-backend/
├── src/
|   ├── config/
|       └── db.js                # MongoDB connection
    ├── controllers/
│       └── dataController.js    # Data handling logic
|   ├── models/
│        └── dataSchema.js       # Data schema
|   ├── routes/
│       └── dataRoutes.js        # API routes
|   ├── Data.js                  # graph data for seeding
|   ├── seed.js                  # Seed data script
|   ├── server/
│       └── server.js            # Server setup
├── .env                         # Environment variables
└── package.json                 # Project config
└── README.md                    # Project documentation

```


## Dependencies

- **body-parser**: Middleware for parsing incoming request bodies.
- **cors**: Middleware for enabling CORS.
- **dotenv**: Loads environment variables from `.env` file.
- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.

## Dev Dependencies

- **chai**: Assertion library for Node.js.
- **chai-http**: HTTP integration testing with Chai assertions.
- **mocha**: JavaScript test framework for Node.js.
- **mongodb-memory-server**: In-memory MongoDB server for testing.
- **sinon**: Test spies, stubs, and mocks.
- **supertest**: HTTP assertions made easy.

## License

This project is licensed under the ISC License.

## Author

This project was created by Gayatri Ganesh Khandalikar. Feel free to reach out if you have any questions or suggestions.
