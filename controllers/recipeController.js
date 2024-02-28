const Recipe = require('../models/Recipe');

// New Recipe
const newRecipe = (req, res) => {
    try {
        res.render('recipes/new.ejs', {tabTitle: 'New Recipe',
        currentUser: req.session.currentUser})
    }catch(err) {
        console.log(err)
    }
}

// Create Recipe
const create = async (req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body)
        console.log(newRecipe)
        res.redirect('/recipes')
    }catch(err) {
        console.log(err)
    }
}

// Index
const index = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.render('recipes/index.ejs', {
            recipes,
            tabTitle: 'All Recipes',
            currentUser: req.session.currentUser  
        })
    }catch(err) {
        console.log(err)
    
}

// Seed Function
const seed = async (req, res) => {
    try {
        const coffeeRecipes = await Recipe.create([
            {
              name: "Classic Americano",
              description: "A simple, robust coffee made by adding hot water to espresso, resulting in a strength similar to drip coffee but with a different flavor.",
              ingredients: ["1 shot espresso", "2 cups hot water"],
              instructions: "Prepare an espresso shot. Add hot water to the espresso until it reaches the desired strength."
            },
            {
              name: "Café Latte",
              description: "A creamy coffee drink made with espresso and steamed milk, perfect for those who enjoy a less intense coffee flavor.",
              ingredients: ["1 shot espresso", "1 cup steamed milk"],
              instructions: "Prepare an espresso shot. Pour steamed milk into the espresso, gently stirring to combine."
            },
            {
              name: "Cappuccino",
              description: "A rich and foamy coffee, consisting of equal parts espresso, steamed milk, and milk foam, often enjoyed with a sprinkle of cocoa powder or cinnamon on top.",
              ingredients: ["1 shot espresso", "1/2 cup steamed milk", "1/2 cup milk foam", "Cocoa powder or cinnamon (optional)"],
              instructions: "Prepare an espresso shot. Add steamed milk to the espresso, then top with milk foam. Optionally, sprinkle with cocoa powder or cinnamon."
            },
            {
              name: "Mocha",
              description: "A delightful mix of chocolate and coffee, made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream.",
              ingredients: ["1 shot espresso", "1 cup steamed milk", "2 tablespoons chocolate syrup", "Whipped cream (optional)"],
              instructions: "Prepare an espresso shot. Mix in chocolate syrup. Pour steamed milk into the mixture, and top with whipped cream if desired."
            },
            {
              name: "Iced Coffee",
              description: "A refreshing, cold coffee drink perfect for hot days, made by cooling down freshly brewed coffee and serving it over ice.",
              ingredients: ["1 cup brewed coffee, cooled", "Ice cubes", "Milk or sweetener (optional)"],
              instructions: "Brew a cup of coffee and let it cool. Fill a glass with ice cubes. Pour the cooled coffee over the ice. Add milk or sweetener if desired."
            }
          ])
            console.log(coffeeRecipes)
            res.redirect('/recipes')
    }catch(err) {
        console.log(err)
}}


module.exports = {
    new: newRecipe,
    create,
    seed
}