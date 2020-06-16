import axios from "axios";

export default {
    // Gets all posts
    stripe: function(postData) {
        console.log(postData)
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: '/check',
        data: postData
     })
    },
}