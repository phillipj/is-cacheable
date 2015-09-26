'use strict'

var test = require('tape')

var isCacheable = require('../')

test('cacheable with etag header', function (t) {
  t.true(isCacheable({ etag: 'somethingRandom' }))
  t.end()
})
