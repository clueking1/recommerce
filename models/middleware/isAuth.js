module.exports = function(req, res, next) {
    if (req.user) {
        res.json('success')
    } else {
        res.json('no')
    }
   
}