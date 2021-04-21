var request = require('request');
request('http://vue.api.js.comcto.com/api.js/password1.php', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body)
    }
})
