import Axios, {AxiosResponse} from "axios";
import Users, {User} from "../models/Users";

export function getUsers() {
    return Axios.get<AxiosResponse<Users> | {}>(
        '/api/users?per_page=12'
    );
}

export function getUser(userId: number) {
    return Axios.get<AxiosResponse<User | {}>>(
        `/api/users/${userId}`
    )
}
