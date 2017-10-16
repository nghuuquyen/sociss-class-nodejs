let BaseError = require('./BaseError');

class NotFoundError extends BaseError {
  constructor(message, isPublic = true) {
    super(message, 400, isPublic);
  }
}

module.exports = NotFoundError;
