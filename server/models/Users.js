// Design the Schema for the Users collection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const habitSchema = new Schema ({
    name: String,
    frequency: String,
    history: [{ date: Date, completed: Boolean }],
    streak: Number,
    createdAt: { type: Date, default: Date.now, immutable: true },
    updatedAt: { type: Date, default: Date.now }
})

// This schema defines the structure of the Users collection in MongoDB.
const userSchema = new Schema({
    username: String,
    habits: [habitSchema],
})
const User = mongoose.model('User', userSchema);

module.exports = User;