import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { decamelizeKeys, camelizeKeys } from "humps";
import auth from "./auth";

type IRequestInterceptorFulFilled =
  | ((
      value: InternalAxiosRequestConfig<any>,
    ) =>
      | InternalAxiosRequestConfig<any>
      | Promise<InternalAxiosRequestConfig<any>>)
  | null
  | undefined;

type IRequestInterceptorRejected = ((error: any) => any) | undefined;

type IResponseInterceptorFulfilled =
  | ((value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>)
  | undefined;

type IResponseInterceptorRejected = ((error: any) => any) | undefined;

const getHost = () => "http://localhost:3000";

const attachRequestInterceptor = (
  onFulfilled: IRequestInterceptorFulFilled,
  onRejected: IRequestInterceptorRejected,
) => {
  axiosInstance.interceptors.request.use(onFulfilled, onRejected);
};

const attachResponseInterceptor = (
  onFulfilled: IResponseInterceptorFulfilled,
  onRejected: IResponseInterceptorRejected,
) => {
  axiosInstance.interceptors.response.use(onFulfilled, onRejected);
};

export const axiosInstance: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: getHost(),
  transformRequest: [
    data => decamelizeKeys(data),
    data => JSON.stringify(data),
  ],
  transformResponse: [
    data => {
      try {
        return JSON.parse(data);
      } catch (err) {
        return data;
      }
    },
    data =>
      camelizeKeys(data, (key, convert) =>
        /^[A-Z0-9_]+$/.test(key) ? key : convert(key),
      ),
  ],
});

export default {
  getHost,
  attachResponseInterceptor,
  attachRequestInterceptor,
  auth: auth(axiosInstance),
};
