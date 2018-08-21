import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS
} from "../constants/action-types";
// import { notify } from "../components/utils/Notify";

const authReducer = (
  state = { authenticated: false, user_data: {} },
  action
) => {
  switch (action.type) {
    case AUTHENTICATED:
      // notify("SUCCESS", "Welcome, " + action.payload.credential.first_name);
      return { ...state, authenticated: true, user_data: action.payload };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case REGISTRATION_ERROR:
      if (action.payload.type === "manager") {
        return { ...state, reg_error: action.payload.message };
      } else return { ...state, reg_error: action.payload.message };
    case REGISTRATION_SUCCESS:
      return { ...state, reg_success: action.payload };
    default:
      return state;
  }
};

export default authReducer;
