var assert = require('assert')
var shared = require('shared/test')
var common = require('common/test')

it('can resolve paths defined in package.json', function() {
    assert(typeof shared == 'function')
})

it('can resolve paths defined as cli parameter', function() {
    assert(typeof common == 'function')
})

