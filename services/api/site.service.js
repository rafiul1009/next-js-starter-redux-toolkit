import { apiPrefix } from "../../config/config";
import { api } from "../interceptor/auth.interceptor";

class SiteService {

    static async getSiteSettings() {
        return await api
            .get("/" + apiPrefix + "/siteSetting")
            .then((response) => {
                return response.data.data;
            });
    }
}

export default SiteService;