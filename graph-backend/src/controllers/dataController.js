import Data from '../models/dataSchema.js';

// Get all data
export const getData = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

