import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.qa.vitawallet.io/api/",
  headers: {
    "Content-Type": "application/json",
    "app-name": "ANGIE",
  },
  timeout: 20000,
});
