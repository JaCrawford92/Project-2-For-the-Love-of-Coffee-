const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the Recipe Schema
const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    ingredients: [String],
    instructions: String,
    username: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, {timestamps: true})

// Define the User Schema
const userSchema = Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},

    // Embedding the Recipe model into the User model
    recipes: [recipeSchema],
})

// Create the User and Recipe models
const User = mongoose.model('User', userSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)

// Export the User and Recipe models
module.exports = {User, Recipe}