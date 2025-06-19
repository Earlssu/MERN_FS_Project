import mongoose, { Schema } from 'mongoose';
import { ThemeDocument } from '../../shared/types/themes';

const ThemeSchema = new Schema<ThemeDocument>({
  bookingUrl: { type: String, required: true },
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rate: { type: String, required: true },
  description: { type: String, required: true },
  store_info: {
    name: { type: String, required: true },
    placeId: { type: String },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
  },
  creator: { type: String, required: true },
});

const Theme = mongoose.model<ThemeDocument>('Theme', ThemeSchema);

export default Theme;
