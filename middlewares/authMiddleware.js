const Recipe = require('../models/User').Recipe; // Adjust the path as necessary to correctly import your Recipe model

const canEditAndDelete = async (req, res, next) => {
    try {
        // Find the recipe by its ID
        const recipe = await Recipe.findById(req.params.id);

        // Check if the current user is the creator of the recipe
        // Had use ChatGpt lesson as a guide to create this code
        if (recipe.userId.equals(req.session.currentUser)) {
            next(); // Proceed if the current user is the creator
        } else {
            // User is not the creator, deny access
            res.status(403).send("You don't have permission to perform this action.");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
};

module.exports = canEditAndDelete;
