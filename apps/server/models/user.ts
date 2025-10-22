import mongoose, { Schema } from 'mongoose';
import { UserDocument } from '../../shared/types/users';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  imageUrl: { type: String },
  placeCount: { type: Number },
  lifeTheme: { type: String },
  lifeThemeUrl: { type: String },
  lastUpdated: { type: String },
});

UserSchema.plugin(uniqueValidator);

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;
