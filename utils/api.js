import { apiUrl } from '../config/config';
export function getScoreApiHeader(route) {
  return {
    url: apiUrl + '/score/' + route,
    method: 'get',
    headers: {
      'api-token': 'sf84dfj3ioa2fm6s233s;8' // currently not used
    }
  };
}