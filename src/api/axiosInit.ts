import axios, { AxiosError, AxiosResponse} from "axios";

export function axiosInit() {

    axios.defaults.baseURL = process.env.REACT_APP_API_URL;

    const requestHandler = (request:any) => {
        return request;
    }

    const responseHandler = (response: AxiosResponse) => {
        return response;
    }

    const errorHandler = (error: AxiosError) => {
        return Promise.reject(error);
    }

    axios.interceptors.request.use(
        (request: any) => requestHandler(request),
        (error: AxiosError) => errorHandler(error)
    )

    axios.interceptors.response.use(
        (response: AxiosResponse) => responseHandler(response),
        (error: AxiosError) => errorHandler(error)
    )
}