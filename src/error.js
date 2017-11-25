

const tresorError = {
  status: 500,
  body: "Server Error"
}

export function Field(field, message) {
  return {
    field: field,
    message: message
  }
}

export function FieldError(fields) {
  const that = Object.create(tresorError);
  that.status = 442;
  that.body = {
    fields: fields
  };
  return that;
}

export function UnAuthorizedError(message) {
  const that = Object.create(tresorError)
  that.status = 401;
  that.body = {
    message: message
  };
  return that;
}

export function NotFoundError(message) {
  const that = Object.create(tresorError);
  that.status = 404;
  that.body = {
    message: message
  };
  return that;
}