'use strict'

const Spawngo = require('spawngo')
const PROMISIFY = require('./lib/helpers').promisify

class Mongonaut extends Spawngo {
  import (file) {
    return PROMISIFY(super.import(file))
  }

  export (collection, pathFile) {
    return PROMISIFY(super.export(collection, pathFile))
  }
}

module.exports = Mongonaut
