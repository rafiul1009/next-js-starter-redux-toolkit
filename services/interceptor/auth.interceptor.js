import axios from 'axios';
import { apiUrl } from '../../config/config';
import { accessToken, refreshToken } from '../../constants/storage';
import { getCookie, setCookie } from '../../utils/cookie';

const api = axios.create({
  baseURL: apiUrl,
});

const authApi = axios.create({
  baseURL: apiUrl,
});

authApi.interceptors.request.use(
  async (config) => {
    let accessTokenNew = getCookie(accessToken);
    
    if (!accessTokenNew) {
      const refreshTokenNew = getCookie(refreshToken);
      if (refreshTokenNew) {
        const formData = new FormData();
        formData.append(refreshToken, refreshTokenNew);
        const { data } = await axios.post(apiUrl + "/oauth/token", formData);
        // console.log("accessToken", data);
        if (data) {
            // console.log('signIn interceptors', data);
            setCookie(accessToken, data.accessToken, data.expires_in);
            setCookie(refreshToken, data.refreshToken);
        }
        accessTokenNew = data.accessToken;
      } else {
        window.location = "/login";
      }
    }

    config.headers.common.Authorization = `Bearer ${accessTokenNew}`;
    return config;
  },
  (err) => {
    console.error(err);
    return Promise.reject(err);
  },
);

export { api, authApi };
