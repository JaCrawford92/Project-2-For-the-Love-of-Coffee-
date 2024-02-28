const isAuthenticated = (req, res) => {
    if(req.session.currentUser) {
        return true()
    } else {
        res.redirect('/sessions/new')
    }
}

module.exports = isAuthenticated