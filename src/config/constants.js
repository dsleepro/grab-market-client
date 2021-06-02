// export const API_URL = "http://localhost:8080";
export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://dsleepro-market-server.herokuapp.com"
    : "http://localhost:8080";
