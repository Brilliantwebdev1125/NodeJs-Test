import axios, { AxiosError } from "axios";

const http = axios.create({
  baseURL: `http://${process.env.REACT_APP_BACKEND_HOST}:${process.env.REACT_APP_BACKEND_PORT}/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

export const post = async (url: string, data: any) => {
  try {
    const response = await http.post(url, data);
    return {status: "success", data: response.data};
  } catch (err: AxiosError | any) {
    console.log(err);
    return {status: "failed", data: err.message}
  }
}