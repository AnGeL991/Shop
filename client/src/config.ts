export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://furniture12.herokuapp.com/api"
    : "http://localhost:8000/api";
