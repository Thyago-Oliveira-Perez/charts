import axios from "axios";

export default class Api {
  url = import.meta.env.VITE_API_URL;

  axiosClient = axios.create({
    baseURL: this.url,
    headers: { "Content-type": "application/json" },
  });

  async get(path, options = {}) {
    return await this.axiosClient.get(`${this.url}/${path}`, options);
  }
}
