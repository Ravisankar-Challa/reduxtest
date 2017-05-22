const axios = require('axios')

axios.get('http://www.qantas.com')
     .then(response => console.log(response.data))