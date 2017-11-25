import user from './user'
import error from '../../error'

function verifyInput(registration) {
    const errorFields = [];
    if (!registration.userName) {
        errorFields.push(error.UnprocessableEntity.Field("userName", "userName kosong"));
    }
    if (!registration.password) {
        errorFields.push(error.UnprocessableEntity.Field("password", "password kosong"));
    } else if (!checkPassword(registration.password)) {
        errorFields.push(error.UnprocessableEntity.Field("password", "Password harus terdiri dari minimal 6 karakter dan mengandung huruf besar, huruf kecil, dan angka"));
    }
    if (errorFields.length !== 0) {
        throw error.UnprocessableEntity.create(errorFields);
    } else {
        return registration;
    }
}

function checkPassword(password) {
    return new RegExp("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d^a-zA-Z0-9].{5,50}$").test(password);
}

function checkUserExist(registration) {
    console.log(registration)
    return user
        .getUserByUserName(registration.userName)
        .then(user => {
            if (user) {
                const errorField = []
                errorField.push(error.Field("userName", "userName sudah terdaftar"))
                throw error.FieldError(errorField)
            } else {
                return registration
            }
        })
        .catch(err => {
            if (err.code === 404) {
                return registration
            } else {
                throw err
            };
        });
}

const service = {
    verifyInput: verifyInput,
    checkUserExist: checkUserExist
}

export default service