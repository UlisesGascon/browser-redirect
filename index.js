const useragent = require('useragent');

module.exports = () => (req, res, next) => {
    const ua = useragent.is(req.headers['user-agent']);
    ua.chrome ? next(): res.redirect("https://browsehappy.com/")
}