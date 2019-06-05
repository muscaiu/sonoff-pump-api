import mongoose from 'mongoose';

const modeSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true
  });

const Mode = mongoose.model('Mode', modeSchema);


export default Mode;
