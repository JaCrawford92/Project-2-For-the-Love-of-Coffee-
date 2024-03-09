const Recipe = require('../models/User').Recipe
const User = require('../models/User').User



// Index
const index = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.render('index', {
            recipes,
            tabTitle: 'Index',
            currentUser: req.session.currentUser  
        })
    }catch(err) {
        console.log(err)
    }
    
}

// New Recipe
const newForm = (req, res) => {
    try {
        res.render('new', {
            tabTitle: 'New Recipe',
            currentUser: req.session.currentUser})
    }catch(err) {
        console.log(err)
    }
}

// Create Recipe
// Post
const create = async (req, res) => {
    //Billie helped me with this code
    try {
        console.log(req.body)
        if (!req.session.currentUser) {
            return res.send('You must be logged in to create a recipe')
        } 
        const userId = req.session.currentUser

        const recipeData = {...req.body, userId}

        console.log(userId)

        const newRecipe = await Recipe.create(recipeData)
        console.log(newRecipe)
        res.redirect('/recipes')
    }catch(err) {
        console.log(err)

    }
}


// Show Recipe
const show = async (req, res) => {
    try {
        const index = req.params.id
        const recipe = await Recipe.findById(index)
        if(!recipe) {
            res.redirect('show')
        }else{
            res.render('show', {
                recipe,
                tabTitle: recipe.name,
                currentUser: req.session.currentUser
            })
        }
    }catch(err) {
        console.log(err)
    }
}

// Seed Function
const seed = async (req, res) => {
    try {
        const recipes = await Recipe.create([
            {
              name: "Classic Americano",
              description: "A simple, robust coffee made by adding hot water to espresso, resulting in a strength similar to drip coffee but with a different flavor.",
              ingredients: ["1 shot espresso", "2 cups hot water"],
              instructions: "Prepare an espresso shot. Add hot water to the espresso until it reaches the desired strength.",
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
            },
            {
            name: "Flat White",
            description: "Originating from Australia, this coffee drink features a smooth and velvety texture, made by pouring microfoam (steamed milk with small, fine bubbles) over a shot of espresso.",
            ingredients: ["1 shot espresso", "1 cup steamed microfoam milk"],
            instructions: "Prepare an espresso shot. Steam the milk to create microfoam and pour it over the espresso, aiming to create a smooth and velvety texture.",
          },
          {
            name: "Affogato",
            description: "A simple yet indulgent Italian dessert that combines a scoop of vanilla gelato or ice cream with a shot of hot espresso poured over it.",
            ingredients: ["1 scoop vanilla gelato or ice cream", "1 shot hot espresso"],
            instructions: "Place a scoop of vanilla gelato or ice cream in a serving glass or bowl. Pour a hot espresso shot over the gelato and serve immediately.",
          },
          {
            name: "Turkish Coffee",
            description: "A traditional coffee preparation method where finely ground coffee is simmered in water with sugar (optional) and served in a cup where the grounds are allowed to settle.",
            ingredients: ["2 tablespoons finely ground coffee", "1 cup water", "Sugar to taste (optional)"],
            instructions: "Combine water and sugar (if using) in a cezve (a traditional coffee pot) and bring to a simmer. Add the coffee grounds, simmer until frothy, and then pour into a cup allowing the grounds to settle.",
          },
          {
            name: "Cold Brew Coffee",
            description: "A smooth, cold coffee made by steeping coarsely ground coffee beans in cold water for an extended period, usually 12-24 hours, then filtering them.",
            ingredients: ["1 cup coarsely ground coffee", "4 cups cold water"],
            instructions: "Combine coffee grounds and cold water in a jar. Stir, cover, and let steep in the refrigerator for 12-24 hours. Filter the mixture into a clean vessel and serve over ice.",
          },
          {
            name: "Espresso Martini",
            description: "A popular coffee-flavored cocktail made with vodka, coffee liqueur, and freshly brewed espresso, served chilled.",
            ingredients: ["1 shot espresso", "2 oz vodka", "1/2 oz coffee liqueur", "Ice"],
            instructions: "Combine espresso, vodka, and coffee liqueur in a shaker with ice. Shake well and strain into a chilled martini glass.",
          }
          ])
            // console.log(coffeeRecipes)
            res.redirect('/recipes')
    }catch(err) {
        console.log(err)
}}

// Destroy Recipe
const destroy = async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id)
        res.redirect('/recipes')
    }catch(err) {
        console.log(err)
    }
}

// Update Recipe
const update = async (req, res) => {
    try {
        const userId = req.session.currentUser
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})

        await recipe.save()
        res.redirect('/recipes')
    }catch(err) {
        console.log(err)
    }
}

// Edit Recipe
const editForm = async (req, res) => {
    try {

        const recipe = await Recipe.findById(req.params.id)
        if(!recipe) {
            res.redirect('/recipes')
        }

        res.render('edit.ejs', {
            recipe,
            tabTitle: 'Edit Recipe',
            currentUser: req.session.currentUser
        })
    }catch(err) {
        console.log(err)
    }
}


module.exports = {
    index,
    new: newForm,
    create,
    show,
    seed,
    update,
    destroy,
    edit: editForm,
}