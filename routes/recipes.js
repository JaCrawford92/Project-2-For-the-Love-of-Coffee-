// Description: This file is used to define the routes for the recipe model.
const router = require('express').Router()
const recipeCtrl = require('../controllers/recipeController')
const isAuthenticated = require('../controllers/isAuthenticated')
const isOwner = require('../controllers/recipeController')

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
router.use(isAuthenticated)
router.get('/:id/edit', isAuthenticated, recipeCtrl.edit)

// PUT /recipes/:id
router.put('/:id', isAuthenticated, recipeCtrl.update)

// DELETE /recipes/:id
router.delete('/:id', isAuthenticated, recipeCtrl.destroy)

module.exports = router;