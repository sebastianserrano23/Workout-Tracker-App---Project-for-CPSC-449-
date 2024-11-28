import mongoose from "mongoose";

const member_information = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true}
})

export default member_information;