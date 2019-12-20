// import path from "path";
import store from "store";
import axios, { AxiosError } from "axios";
import { load } from "store/actions/app";

export const fetch = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    "Content-Type": "application/json"
  }
});

fetch.interceptors.request.use(config => {
  store.dispatch(load(1) as any);
  return config;
});

fetch.interceptors.response.use(
  res => {
    store.dispatch(load(-1) as any);
    return res;
  },
  (error: AxiosError) => {
    store.dispatch(load(-1) as any);

    return Promise.reject(error);
  }
);

export default fetch;
