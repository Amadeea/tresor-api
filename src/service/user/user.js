import db from "../../db";
import * as error from "../../error";

function getUserByUserName(userName) {
    return db.user
        .getUserByUserName(userName)
        .catch(() => {
            throw error.NotFoundError("user not found");
        })

} 

const services = {
    getUserByUserName: getUserByUserName,
    registerUser: db.user.registerUser
}

export default services