import axios from "axios";

export default {
    // Gets all posts
    stripe: function() {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:7001/check',
     })
    },
}