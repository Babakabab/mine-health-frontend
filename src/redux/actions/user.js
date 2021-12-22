import makeRequest, {axiosInstance} from "../../Utils/makeRequest";
import {LOGIN, LOGOUT} from "../../shared/constants/ActionTypes";

export const addAccessTokenToAxios = ({ access_token }) => {
  console.log({access_token})
  axiosInstance.defaults.headers.common["Authorization"] =
    "Bearer " + access_token;
};
const removeAccessTokenFromAxios = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
};
export const login = ({ email, password }) => async (dispatch) => {
  const response = await makeRequest({
    body: {
      email,
      password,
    },
    method: "post",
    path: "/auth/login",
  });
  if (response && response.data) {
    dispatch({
      type: LOGIN,
      data: response.data,
    });
    addAccessTokenToAxios({ access_token: response.data.AccessToken });
    return response &&response.data;
  } else {
    return false;
  }
};
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  removeAccessTokenFromAxios();
};