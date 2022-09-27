import { apiPrefix } from "../../config/config";
import { authApi } from "../interceptor/auth.interceptor";

class UserService {

    static async getProfile() {
        return await authApi
            .get("/" + apiPrefix + "/user/profile")
            .then((response) => {
                return response.data.data;
            });
    }

    static async updateProfile(formData) {
        return await authApi
            .post("/" + apiPrefix + "/user/profile", formData)
            .then((response) => {
                // console.log(response);
                return response?.data?.data;
            });
    }

    static async updatePassword(formData) {
        return await authApi
            .post("/" + apiPrefix + "/user/profile/change-password", formData)
            .then((response) => {
                // console.log(response);
                return response?.data?.data;
            });
    }

}

export default UserService;