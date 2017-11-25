function tresorError() {
  return {
    status: 500,
    body: "Server Error"
  }
}

const error = {

  UnprocessableEntity: {
    Field: (field, message) => {
      return {
        field: field,
        message: message
      }
    },
    create: (fields) => {
      console.log(this)
      const that = Object.create(tresorError);
      that.status = 442;
      that.body = {
        fields: fields
      };
      return that;
    }
  },

  UnAuthorizedError: (message) => {
    const that = Object.create(tresorError)
    that.status = 401;
    that.body = {
      message: message
    };
    return that;
  },

  NotFoundError: (message) => {
    const that = Object.create(tresorError);
    that.status = 404;
    that.body = {
      message: message
    };
    return that;
  }
}

export default error;