import { apiPrefix } from "../../config/config";
import { api } from "../interceptor/auth.interceptor";

class AuthService {

    static async register(formData) {
        return await api
            .post("/" + apiPrefix + "/signup", formData)
            .then((response) => {
                // console.log(response);
                return response?.data?.data;
            });
    }

    static async signIn(formData) {
        return await api
            .post("/oauth/token", formData)
            .then((response) => {
                // console.log(response);
                return response?.data;
            });
    }
}

export default AuthService;