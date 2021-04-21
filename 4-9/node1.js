var axios = require('axios');
// axios.get('http://vue.api.comcto.com/api/password1.php')
//     .then(function (response) {
//         console.log(response.data);
//     })
axios.get('http://vue.api.js.comcto.com/api.js/password1.php')
    .then(function (response) {
        // handle success
        console.log(response.data);
    })