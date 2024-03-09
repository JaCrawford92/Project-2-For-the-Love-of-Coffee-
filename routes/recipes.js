// Description: This file is used to define the routes for the recipe model.
const router = require('express').Router()
const recipeCtrl = require('../controllers/recipeController')
const isAuthenticated = require('../controllers/isAuthenticated')
const Recipe = require('../models/User').User

// router.use(isAuthenticated)
// GET /recipes
router.get('/', recipeCtrl.index)

// GET /recipes/new
router.get('/new', recipeCtrl.new)

// POST /recipes
router.post('/', recipeCtrl.create)

// GET / seed
router.get('/seed', recipeCtrl.seed)

// GET /recipes/:id
router.get('/:id', recipeCtrl.show)

// isAuthenticated to protect the edit and delete routes
// GET /recipes/:id/edit
// router.use(isAuthenticated)

// const isOwner = async (req, res, next) => {
//     try {
//         const recipe = await Recipe.findById(req.params.recipeId)
//         console.log(recipe)
//         const user = req.session.currentUser
//         if(!recipe) {
//             return res.send('No recipe found')

//         } else if(recipe.user.toString() !== req.session.currentUser._id){
//             return res.send('You are not the owner of this recipe')
//         }

//         return next()

//     } catch(err) {
//         console.log(err)
//     }
    
// }

router.get('/:id/edit', isAuthenticated, recipeCtrl.edit)

// PUT /recipes/:id
router.put('/:id', isAuthenticated, recipeCtrl.update)

// DELETE /recipes/:id
router.delete('/:id', isAuthenticated, recipeCtrl.destroy)

module.exports = router;