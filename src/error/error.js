
class TresorError extends Error {
  constructor(message, status) {

    // Calling parent constructor of base Error class.
    super(message);

    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;

    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    // You can use any additional properties you want.
    // I'm going to use preferred HTTP status for this error types.
    // `500` is the default value if not specified.
    this.status = status || 500;

  }
};

export class ParameterError extends TresorError {
  constructor(message) {
    // Providing default message and overriding status code.
    super(message || 'Specified E-Mail is already taken', 400);
  }
};