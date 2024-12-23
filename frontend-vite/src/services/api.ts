import axios from "axios";
import { getTokenUserSession } from "../utils/user-session/getTokenUserSession";

const rotaPrincipal = import.meta.env.VITE_SOME_KEY;
const token: string | null = getTokenUserSession();


export const endpoint = axios.create({
  baseURL: rotaPrincipal,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

// import axios from "axios";
// import { buscaDadoUsuarioNaSessao } from "../utils/buscaDadoUsuarioNaSessao";

// const endpoint = import.meta.env.VITE_ENDPOINT_API;

// export const Api = axios.create({
//   baseURL: endpoint,
// });

// endpoint.interceptors.request.use(
//   (config) => {
//     const tokenSessao  = buscaDadoUsuarioNaSessao();

//     config.headers!.Authorization = tokenSessao as string;
//     return config;
//   },

//   (error) => {
//     return Promise.reject(error);
//   }
// );
