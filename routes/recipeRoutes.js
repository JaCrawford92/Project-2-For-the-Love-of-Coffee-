// Description: This file is used to define the routes for the recipe model.
const router = require('express').Router()
const isAuthenticated = require('../controllers/isAuthenticated')
const recipeCtrl = require('../controllers/recipeController');

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
router.delete('/:id', recipeCtrl.delete)

module.exports = router;