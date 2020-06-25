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
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/api/login',
            credentials : 'same-origin',
            data: postdata
          })
    
      },
      logout: function() {
         return axios({
            method: 'get',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/logout',
            credentials : 'same-origin',
        
          })
      },
      checklog: function() {
        //return axios.get("http://localhost:7001/checklog", { credentials : 'same-origin' });
        return axios({
            method: 'get',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/checklog',
            credentials : 'same-origin',
        
          })
      },
      upload: function(postdata) {
        //return axios.get("http://localhost:7001/checklog", { credentials : 'same-origin' });
        return axios({
            method: 'post',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/upload',
            credentials : 'same-origin',
            data: postdata
          })
      },
      getImages: function() {
        //return axios.get("http://localhost:7001/checklog", { credentials : 'same-origin' });
        return axios({
            method: 'get',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/items',
            credentials : 'same-origin',
        
          })
      },
      getProd: function() {
        //return axios.get("http://localhost:7001/checklog", { credentials : 'same-origin' });
        return axios({
            method: 'get',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/userProd',
            credentials : 'same-origin',
        
          })
      },
      deleteProd: function(postdata) {
        //return axios.get("http://localhost:7001/checklog", { credentials : 'same-origin' });
        return axios({
            method: 'put',
            headers: { 'content-type': 'application/json',
            "Access-Control-Allow-Origin" : "*"
        },
            url: '/deleteProd',
            credentials : 'same-origin',
            data: postdata
          })
      },
}