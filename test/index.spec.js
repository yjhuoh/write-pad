'use strict';
var rightpad = require('../src');
require('chai').should();

describe('rightpad', function () {
  it('should properly right pad strings', function () {
	rightpad('test', 8).should.equal('test    ');
	rightpad('again', 5).should.equal('again');
  });

  it('third argument should control character', function () {
  	rightpad('rightpa', 8, 'd').should.equal('rightpad');
  });

  it('handle numbers properly', function () {
  	rightpad(4.4, 5).should.equal('4.4  ');
  	rightpad(2, 5, '0').should.equal('20000');
  });

  it('handle empty strings', function () {
  	rightpad('', 5).should.equal('     ');
  	rightpad('', 3, '0').should.equal('000');
  });

});
