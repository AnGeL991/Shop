export const API_URL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8000/api";

function initConfig() {
  let PROTOCOL = "https://";
  let HOST = "localhost";
  let PORT = 8000;
  let ROOT_ENDPOINT = "/api";

  if (process.env.NODE_ENV === "production") {
    PROTOCOL = "/api";
  }

  
  return {
    PROTOCOL,
    HOST,
    PORT,
    ROOT_ENDPOINT,
  };
}

export default initConfig();
