export const actionConstants = {
  GET_USER_REQUEST: "GET_USER_REQUEST",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAILURE: "GET_USER_FAILURE",
  GET_USER_LOGIN: "GET_USER_LOGIN"
};

export const getUserRequest = () => {
  return {
    type: actionConstants.GET_USER_REQUEST
  };
};

export const getUserLogin = () => {
  return {
    type: actionConstants.GET_USER_SUCCESS
  };
};
export const getUserFailure = () => {
  return {
    type: actionConstants.GET_USER_FAILURE
  };
};
