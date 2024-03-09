const Recipe = require('../models/User').Recipe; // Adjust the path as necessary to correctly import your Recipe model

// Chat GPT helped me figure out this middle ware
const canEditAndDelete = async (req, res, next) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        // Assuming req.session.currentUser holds the currently logged-in user's information,
        // and _id is the identifier for both the user and the creator in the database
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
