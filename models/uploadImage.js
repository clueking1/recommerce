const con = require('../config/config')


const upload = {
    upload: function(item, value, img, id) {
        
            con.query('INSERT INTO photo(userID, item, value, img) VALUES (?, ?, ?, ?)',
            [id, item, value, img], (err, results) => {
            if (err) throw err
           
          })
       
        
    }

}

module.exports = upload