const con = require('../config/config')


const upload = {
    upload: function(item, value, img, id) {
        return new Promise(function(resolve, reject) {
           con.query('INSERT INTO photo(userID, item, value, img) VALUES (?, ?, ?, ?)',
            [id, item, value, img], function (err, results){
            if (err) {
                resolve("bad")
            } 
                resolve(results)
            
  
          })
        })
        
    }

}

module.exports = upload