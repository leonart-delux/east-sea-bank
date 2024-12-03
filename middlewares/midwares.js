export function isAuth(req, res, next) {
    if (!req.session.auth) {
        req.session.retUrl = req.originalUrl;
        return res.redirect('/login');
    }
    next()
}
