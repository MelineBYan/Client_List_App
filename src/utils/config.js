export const API_HOST =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL
    : "https://clientlist-app.herokuapp.com";
