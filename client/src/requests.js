import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

export const unauthenticatedRequest = axios.create({
  baseURL: BASE_URL,
});

export const authenticatedRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: "Bearer 123484" },
});
