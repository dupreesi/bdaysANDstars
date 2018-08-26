//serve landing.hbs file to browser
//res.render renders a view and sends a rendered HTML string to the client
exports.get = (req, res) => {
    res.render('landing');
};