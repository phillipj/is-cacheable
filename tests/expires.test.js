'use strict'

var test = require('tape')

var isCacheable = require('../')

test('expires', function (t) {
  t.test('in the future', function (t) {
    t.true(isCacheable({ 'expires': 'Sat, Sep 26 2015 20:33:26 GMT' }))
    t.end()
  })

  t.test('in the past', function (t) {
    t.false(isCacheable({ 'expires': 'Fri, Sep 26 2014 20:33:26 GMT' }))
    t.end()
  })

  t.end()
})
