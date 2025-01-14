import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  SubLocations: [
    {
      id: { type: Number, required: true },
      category: { type: String, required: true },
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
});

const Location = mongoose.models.Location || mongoose.model('Location', locationSchema);

export default Location;
