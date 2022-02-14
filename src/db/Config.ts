import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/blackthorn"
    );
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }
};
