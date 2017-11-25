import * as UsersDb from "../../db/users";
import * as error from "../../error";

function getUserByUserName(userName) {
    return UsersDb
        .getUserByUserName(userName)
        .catch(() => {
            throw error.NotFoundError("user not found");
        })

} 

const UserService = {
    getUserByUserName: getUserByUserName,
    registerUser: UsersDb.registerUser
}

export default UserService