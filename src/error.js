

const tresorError = {
  status: 500,
  body: "Server Error"
}

export function FieldError(fields) {
  const that = Object.create(tresorError)
  that.status = 442;
  that.body = fields;
  return that
}

export function UnAuthorizedError(message) {
  const that = Object.create(tresorError)
  that.status = 401;
  that.body = {
    message: message
  };
  return that
}