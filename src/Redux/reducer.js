import { actionConstants } from "./action";
const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.GET_USER_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }

    case actionConstants.GET_USER_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case actionConstants.GET_USER_LOGIN: {
      console.log("call");
      return {
        ...state,
        isAuth: true
      };
    }

    default:
      return state;
  }
}
export default reducer;
