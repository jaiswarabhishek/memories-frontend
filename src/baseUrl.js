const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000"
    : "https://memories-app-api.onrender.com";

export default baseUrl;

