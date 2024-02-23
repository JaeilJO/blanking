import axios from "axios";

export async function signUp(data: { [key: string]: string }) {
  return axios.post(`/api/signup`, {
    ...data,
  });
}
