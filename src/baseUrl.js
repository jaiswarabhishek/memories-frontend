const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:4000"
    : "YOUR PRODUCTION URL";

export default baseUrl;