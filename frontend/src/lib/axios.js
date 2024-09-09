import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "http://localhost:5000/api/v1" : "/api/v1",
	withCredentials: true,
});
