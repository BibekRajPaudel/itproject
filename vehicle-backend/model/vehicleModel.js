import { Schema, model } from "mongoose";

const vehicleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    descriptions: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    delivery: {
      type: Boolean,
      required: true,
    },
    negotiable: {
      type: Boolean,
      required: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    makeYear: {
      type: String,
      required: true,
      trim: true,
    },
    engineCC: {
      type: String,
      required: true,
      trim: true,
    },
    fuelType: {
      type: String,
      required: true,
      trim: true,
    },
    totalKm: {
      type: String,
      required: true,
      trim: true,
    },
    billbook: {
      ownerName: {
        type: String,
        required: true,
        trim: true,
      },
      billbookNumber: {
        type: String,
        required: true,
        trim: true,
      },
      ownerPhoto: {
        type: String,
        required: true,
        trim: true,
      },
      buyingDate: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Vehicle = model("User", vehicleSchema);

export default Vehicle;
