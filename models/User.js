const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    ingredients: [String],
    instructions: String,
}, {timestamps: true})

const userSchema = Schema ({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},

    // Embedding the Recipe model into the User model
    recipes: [recipeSchema],
})

const User = mongoose.model('User', userSchema)
const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = {User, Recipe}