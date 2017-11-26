import db from "../../db";
import * as error from "../../error";

function getUserByUserName(userName) {
    return db.user
        .getUserByUserName(userName)
        .catch(() => {
            throw error.NotFoundError("user not found");
        })

}

function mapUser(userModel) {
    return {
        userId: userModel.userId,
        userName: userModel.userName,
        email: userModel.email,
        createdAt: userModel.createdAt,
        updatedAt: userModel.updatedAt
    }
}

const services = {
    getUserByUserName: getUserByUserName,
    registerUser: db.user.registerUser,
    mapUser: mapUser
}

export default services