// Description: This file is used to define the routes for the recipe model.
const router = require('express').Router()
const recipeCtrl = require('../controllers/recipeController')
const isAuthenticated = require('../controllers/isAuthenticated')


router.use(isAuthenticated)
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
router.get('/:id/edit', recipeCtrl.edit)

// PUT /recipes/:id
router.put('/:id', recipeCtrl.update)

// DELETE /recipes/:id
router.delete('/:id', recipeCtrl.destroy)

module.exports = router;