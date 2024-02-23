import axios from "axios";

interface chekcEmailParams {
  email: string;
}

export default async function chekcEmail({ email }: chekcEmailParams) {
  return axios.get(`/api/checkEmail/${email}`);
}
