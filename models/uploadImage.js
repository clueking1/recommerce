const con = require('../config/config')
const fs = require('fs');
const AWS = require('aws-sdk')


const BUCKET = 'recommerceimages'
const REGION = 'us-east-1'
const ACCESS_KEY = 'AKIAJXP3NUWAXGRJBXRQ'
const SECRET_KEY = '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'

const localImage = './goldPic.jpg'
const imageRemoteName = `${new Date().getTime()}.jpg`

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION
})

var s3 = new AWS.S3()


const upload = {
    upload: function(item, value, img, id) {
        // console.log(img)
        // s3.putObject({
        //     Bucket: BUCKET,
        //     Body: fs.readFileSync(img),
        //     Key: imageRemoteName,
        //     Metadata: { 'type': 'jpeg'}
        //   })
        //     .promise()
        //     .then(response => {
        //       console.log(`done! - `, response)
        //       console.log(
        //         `The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET, Key: imageRemoteName })}`
        //       )
        //     })
        //     .catch(err => {
        //       console.log('failed:', err)
        //     })

        return new Promise(function(resolve, reject) {
           con.query('INSERT INTO photo(userID, item, value, img) VALUES (?, ?, ?, ?)',
            [id, item, value, img], function (err, results){
            if (err) {
                resolve("bad")
            } 
                resolve(results)
            
  
          })
        })
        
    },
    images: function() {
        return new Promise(function(resolve, reject) {
            con.query('SELECT * from photo',function (err, results){
             if (err) {
                 resolve("bad")
             } 
                 resolve(results)
             })
         })
    }

}

module.exports = upload