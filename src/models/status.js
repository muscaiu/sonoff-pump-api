import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
  value: {
    type: Boolean,
    required: true,
  },
},
  {
    timestamps: true
  });

const Status = mongoose.model('Status', statusSchema);


export default Status;
