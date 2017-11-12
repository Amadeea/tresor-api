

const tresorError = {
  status: 500,
  body: "Server Error"
}

export function FieldError(fields) {
  const that = Object.create(tresorError)
  that.body = fields
  return that
}