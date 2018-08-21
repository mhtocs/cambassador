import {
  FETCH_PROGRAMS,
  FETCH_APPLIED_PROGRAMS,
  FETCH_CATEGORIES,
  FETCH_SINGLE_PROGRAM,
  CLEAR_DATA
} from "../constants/action-types";
import { ALL_PROGRAMS_URL } from "../constants/urls";

const initialState = {
  programs: [],
  applied_programs: [],
  categories: [],
  url: ALL_PROGRAMS_URL,
  applied_url: ALL_PROGRAMS_URL,
  tmp_program: {},
  initial_fetch: false,
  applied_initial_fetch: false
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROGRAMS:
      console.log(action.payload.next);
      return {
        ...state,
        programs: [...state.programs, ...action.payload.results],
        url: action.payload.next,
        initial_fetch: true
      };

    case FETCH_APPLIED_PROGRAMS:
      console.log(action.payload.next);
      return {
        ...state,
        applied_programs: [
          ...state.applied_programs,
          ...action.payload.results
        ],
        applied_url: action.payload.next,
        applied_initial_fetch: true
      };

    case FETCH_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
        tmp_program: {} //reset tmp_program on going back from detailed page
      };
    }
    case FETCH_SINGLE_PROGRAM: {
      console.log("program", action.payload);
      return {
        ...state,
        tmp_program: action.payload
      };
    }
    case CLEAR_DATA: {
      console.log("Clearing everything");
      localStorage.clear();
      return {
        ...state,
        programs: [],
        applied_programs: [],
        categories: [],
        url: ALL_PROGRAMS_URL,
        tmp_program: {},
        initial_fetch: false
      };
    }
    default:
      return state;
  }
};

export default dataReducer;
