const isAuthenticated = (req, res, next) => {
    // if the user is logged in, proceed
    if(req.session.currentUser) {
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

module.exports = isAuthenticated