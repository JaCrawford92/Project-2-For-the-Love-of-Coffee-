// Description: This file is used to define the routes for the recipe model.
const router = require('express').Router()
const recipeCtrl = require('../controllers/recipeController')
const isAuthenticated = require('../controllers/isAuthenticated')
const canEditAndDelete = require('../middlewares/authMiddleware')
const Recipe = require('../models/User').User

//Use Fruits_app lesson as a guide to create the routes for the recipe model
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


// GET /recipes/:id/edit
router.get('/:id/edit', isAuthenticated, canEditAndDelete, recipeCtrl.edit)

// PUT /recipes/:id
router.put('/:id', isAuthenticated, canEditAndDelete, recipeCtrl.update)

// DELETE /recipes/:id
router.delete('/:id', isAuthenticated, canEditAndDelete, recipeCtrl.destroy)

module.exports = router;