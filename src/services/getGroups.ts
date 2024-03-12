import axios from "axios";

export default async function getGroups(subkey: string) {
  return axios.get(`/api/groups/${subkey}`);
}
