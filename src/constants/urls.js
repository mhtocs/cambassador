export const BASE_URL = process.env.REACT_APP_API_URL;
console.log(`BASE_URL is: ${BASE_URL}`)
export const ALL_PROGRAMS_URL = BASE_URL + "api/v1/programs/";
export const APPLIED_PROGRAMS_URL = BASE_URL + "api/v1/applied/";

export const ALL_CATEGORIES_URL = BASE_URL + "api/v1/category/";
export const REGISTER_MANAGER_URL = BASE_URL + "api/v1/auth/register/manager/";
export const REGISTER_STUDENT_URL = BASE_URL + "api/v1/auth/register/student/";
export const LOGIN_URL = BASE_URL + "api/v1/auth/login/";
export const SINGLE_PROGRAM_URL = BASE_URL + "api/v1/programs/";

export  const APPLICATION_PROGRAMS_URL = BASE_URL + "api/v1/applied/";

export const FONT_URL =
  "https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700|Open+Sans";

export const adminURL = `${BASE_URL}admin`;
export const HOME_URL = "http://localhost";
