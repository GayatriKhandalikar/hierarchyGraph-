import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
},
  description: { 
    type: String,
    required: true 
},
  parent: {
    type: String, 
    default: '' },
});

const Data = mongoose.model('Data', dataSchema);

export default Data;
