'use strict'

function normalizeCacheControl (cacheControlVal) {
  var values = cacheControlVal.replace(/\s/, '').split(',')

  return values.reduce(function (acc, current) {
    var keyVal = current.split('=')
    if (keyVal.length === 1) keyVal.push(true)
    acc[keyVal[0]] = keyVal[1]
    return acc
  }, {})
}

module.exports = function isCacheable (headers) {
  if ('cache-control' in headers) {
    var cacheControl = normalizeCacheControl(headers['cache-control'])
    if (cacheControl['max-age']) {
      var deltaSeconds = parseInt(cacheControl['max-age'], 10)
      return deltaSeconds > 0
    }
  }

  if ('expires' in headers) {
    var expiryUnixTime = new Date(headers['expires']).getTime()
    return expiryUnixTime > Date.now()
  } else if ('etag' in headers) {
    return true
  } else if ('last-modified' in headers) {
    return true
  }
  return false
}
