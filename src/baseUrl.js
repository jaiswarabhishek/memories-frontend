const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000"
    : "https://memories-app-api-c9f2.onrender.com";
export default baseUrl;

