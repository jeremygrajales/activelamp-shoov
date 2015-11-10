'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');
var config = require('../configuration.js');

describe('Visual monitor testing', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, config.caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the home page',function(done) {
    client
      .url(config.baseUrl)
      .webdrivercss(config.testName + '.homepage', {
        name: '1',
        exclude: [],
        remove: [
          ".hero-text .fa-angle-down",
          ".social.ember-application"
        ],
        hide: [
          "#intro-video",
          ".musing-list"
        ],
        screenWidth: config.selectedCaps == 'chrome' ? [640, 960, 1200] : undefined,
      }, config.resultsCallback)
      .call(done);
  });
});
