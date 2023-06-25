import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}


const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c78ff45e05b648daa2c8f4f242f306cf",
  },
});


class APIClient<T> {
  endpoint: string;

  constructor (endpoint: string) {
    this.endpoint = endpoint; 
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint)
  }
}

export default APIClient;