export interface AuthRegisterResponse {
    id: number;
    token: string;
}

export interface AuthErrorResponse {
    error: string;
}

export interface AuthLoginResponse {
    token: string;
}
