const EventEmitter = require('events');
const util = require('util');
const Stream = require('stream');
const http = require('http');
const debug = require('debug')('mnop:application');

/** The main application class */
class Application extends EventEmitter {
  /**
   * The constructor
   * @param {Object} options Options used when configuring the server
   */
  constructor(options) {
    super();

    this.options = {};
  }
}

module.exports = Application;
