const admin = ['ada','vim','tim','greta','eric','julian','diego'];

module.exports = (req, res, next) => {
    if (admin.includes(req.query.user)){
        next()
    }else{
        res.redirect('/login?error=true');
    }
}