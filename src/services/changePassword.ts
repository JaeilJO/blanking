import axios from "axios";

interface ChangePasswordParams {
  subkey: string;
  password: string;
}

export default async function changePassword({
  subkey,
  password,
}: ChangePasswordParams) {
  return axios.patch(`/api/changePassword/${subkey}`, {
    password: password,
  });
}
