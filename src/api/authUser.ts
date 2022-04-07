import Axios from "axios";
import AuthData from '../models/AuthData';
import {AuthErrorResponse, AuthLoginResponse, AuthRegisterResponse} from "../models/AuthRes";


export function loginUser(data: AuthData) {
    return Axios.post<AuthLoginResponse | AuthErrorResponse>(
        '/api/login',
        data
    )
}

export function createUser (data: AuthData)  {
    return Axios.post<AuthRegisterResponse | AuthErrorResponse>(
        '/api/register',
        data
    )
}
