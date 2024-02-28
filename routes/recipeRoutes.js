// Description: This file is used to define the routes for the recipe model.
const router = require('express').Router()
const isAuthenticated = require('../controllers/isAuthenticated')
// const Recipe = require('../models/Recipe');
// // const recipeController = require('../controllers/recipeController');

router.use(isAuthenticated)
// // GET /recipes
// router.get('/', recipeController.index)

// // GET /recipes/new
// router.get('/new', recipeController.new)

// // POST /recipes
// router.post('/', recipeController.create)

// // GET /recipes/:id
// router.get('/:id', recipeController.show)

// // GET /recipes/:id/edit
// router.get('/:id/edit', recipeController.edit)

// // PUT /recipes/:id
// router.put('/:id', recipeController.update)

// // DELETE /recipes/:id
// router.delete('/:id', recipeController.delete)

// module.exports = router;