'use strict'

var test = require('tape')

var isCacheable = require('../')

test('cacheable with last-modified header', function (t) {
  t.true(isCacheable({ 'last-modified': 'Sat, 26 Sep 2015 20:16:26 GMT' }))
  t.end()
})
