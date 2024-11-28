import mongoose from "mongoose";

const memberSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: { 
        type: String, required: true 
    },
    email: { 
        type: String, required: true 
    },
    password: { 
        type: String, required: true
    }
});

const Member = model("Member", memberSchema)

export default Member;