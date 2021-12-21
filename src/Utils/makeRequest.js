import axios from 'axios';
import urls from '../domainUrlsConfig';
// import { SHOW_SNACKBAR } from "../actions/view";
// import domainUrlsConfig from "../domainUrlsConfig";

const axiosInstance = axios.create();
export default async ({
  body = {},
  method = 'get',
  path,
  base = urls.baseUrl,
}) => {
  console.log(base + path);
  return axiosInstance[method](base + path, body)
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return false;
    });
};

export {axiosInstance};
