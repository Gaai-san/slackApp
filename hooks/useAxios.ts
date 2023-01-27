import axios, { AxiosResponse } from "axios";
import camelcaseKeys from "camelcase-keys";

export const useAxios = () => {
  const instance = axios.create({
    headers: { "Content-Type": "application/json" },
    responseType: "json",
    baseURL: "https://realtime-database-dea31-default-rtdb.firebaseio.com/",
  });

  // instance.interceptors.response.use(
  //   (response: AxiosResponse): AxiosResponse => {
  //     return camelcaseKeys(response, { deep: true });
  //   }
  // );

  return { axios: instance };
};
