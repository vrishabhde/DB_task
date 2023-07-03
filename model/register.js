import mongoose from "mongoose";
import { Schema } from "mongoose";

const newuser = new Schema({

});

export default mongoose.model("Users", newuser);