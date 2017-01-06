/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
  Object.keys(window).forEach((key) => {
    if (key in global) return;
    global[key] = window[key];
  });
}

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);

// everything we need for our tests
const {
  assert, expect,
} = chai;

chai.use(chaiImmutable);

export {
  React,
  chai,
  assert,
  expect,
  TestUtils,
};
