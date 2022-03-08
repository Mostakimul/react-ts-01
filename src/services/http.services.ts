import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosConfig: AxiosRequestConfig = {
  // need to fix type of baseURL
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 1000,
};

const instance: AxiosInstance = axios.create(axiosConfig);

class Request {
  async get(url: string): Promise<AxiosResponse> {
    return instance.get(url).then((res) => res.data);
  }

  async post(url: string, body: any): Promise<AxiosResponse> {
    return instance.post(url, body).then((res) => res.data);
  }

  async update(url: string, body: any): Promise<AxiosResponse> {
    return instance.patch(url, body).then((res) => res.data);
  }

  async delete(url: string): Promise<AxiosResponse> {
    return instance.delete(url).then((res) => res.data);
  }
}

const httpReq = new Request();

export default httpReq;
