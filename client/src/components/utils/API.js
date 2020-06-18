import axios from "axios";

export default {
    // Gets all posts
    stripe: function(postData) {

    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:7001/check',
        data: postData
     })
    },
    createUser: function(postdata) {
        console.log(postdata)
        return axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: 'http://localhost:7001/user',
            data: postdata
          })
    
      },
      login: function(postdata) {
          console.log(postdata)
        return axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: 'http://localhost:7001/api/login',
            data: postdata
          })
    
      },
}