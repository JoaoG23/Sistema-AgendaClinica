import axios from "axios";
import { buscaDadoUsuarioNaSessao } from "../utils/buscaDadoUsuarioNaSessao";

const rotaPrincipal = import.meta.env.VITE_SOME_KEY;
const sessionData: string | null = buscaDadoUsuarioNaSessao();

const session = JSON.parse(sessionData as string);

export const endpoint = axios.create({
  baseURL: rotaPrincipal,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${session?.token}`,
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
