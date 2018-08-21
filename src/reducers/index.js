import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import { loadingBarReducer } from "react-redux-loading-bar";
export default combineReducers({
  data: dataReducer,
  form: formReducer,
  auth: authReducer,
  loadingBar: loadingBarReducer
});
