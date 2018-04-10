module.exports = function (req, res, next){
    if(!req.session.user) {
        req.session.user = { session_id: '', user_id: '', user_name: '' }
 }
 next()
}
