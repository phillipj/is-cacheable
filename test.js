var isCacheable = require('.')
var request = require('request')

request('http://www.vg.no', function (err, res, body) {
  console.log('Is response from finn.com cacheable?', isCacheable(res.headers))
})