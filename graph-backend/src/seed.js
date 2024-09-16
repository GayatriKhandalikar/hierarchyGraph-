import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Data from './models/dataSchema.js';
import hierarchyData from './Data.js';

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Data.deleteMany();

    // Insert sample data
    await Data.insertMany(hierarchyData);
    console.log('Data seeded successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDatabase();
