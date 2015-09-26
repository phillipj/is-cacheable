'use strict'

var test = require('tape')

var isCacheable = require('../')

test('cache-control', function (t) {
  t.test('max-age', function (t) {
    t.true(isCacheable({ 'cache-control': 'max-age=60' }))
    t.end()
  })

  t.test('public and expires', function (t) {
    t.true(isCacheable({
      'cache-control': 'public',
      'expires': 'Fri, 01 Jan 2100 12:00:00 GMT'
    }))

    t.end()
  })

  t.test('max-age in the past / below zero', function (t) {
    t.false(isCacheable({ 'cache-control': 'max-age=0' }))
    t.false(isCacheable({ 'cache-control': 'max-age=-100' }))
    t.end()
  })

  t.test('no-cache', function (t) {
    t.false(isCacheable({ 'cache-control': 'no-cache' }))
    t.end()
  })

  t.test('no-store', function (t) {
    t.false(isCacheable({ 'cache-control': 'no-store' }))
    t.end()
  })

  t.end()
})
