
export class TresorError extends Error {
  constructor(message, status) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.status = status || 500;
  }
};

export class ParameterError extends TresorError {
  constructor(field, message) {
    super(message || 'UnprocessableEntity', 442);
    this.field = field
  }
};