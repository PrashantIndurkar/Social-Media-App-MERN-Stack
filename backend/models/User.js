const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please Enter An Email"],
		unique: [true, "Email already exists"],
	},
  avatar:{
    public_id:String,
  }
	password: {
		type: String,
		required: [true, "please enter a password"],
		minlength: [6, "Password must be at least 6 characters"],
		select: false,
	},
	posts: [
		{
			type: mongoose.Schema.Type.ObjectId,
			ref: "Post",
		},
	],
	followers: [
		{
			type: mongoose.Schema.Type.ObjectId,
			ref: "User",
		},
	],
	following: [
		{
			type: mongoose.Schema.Type.ObjectId,
			ref: "User",
		},
	],
});

module.exports = mongoose.model("User", userSchema);
