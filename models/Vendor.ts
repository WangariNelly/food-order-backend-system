import mongoose, { Schema, Document, Model } from 'mongoose';

interface VendorDoc extends Document {
  name: string;
  ownerName: string;
  pincode: string;
  address: string;
  foodType: [string];
  phone: string;
  email: String;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImages: [string];
  rating: number;
//   foods: any;
}

const vendorSchema = new Schema(
  {
    name: { type: String, required: true },
    ownerName: { type: String, required: true },
    pincode: { type: String, required: true },
    address: { type: String },
    foodType: { type: [String] },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    serviceAvailable: { type: Boolean },
    coverImages: { type: [String] },
    rating: { type: Number },
    // foods: [
    //   {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "food",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);


const Vendor = mongoose.model<VendorDoc>("vendor", vendorSchema);

export { Vendor }