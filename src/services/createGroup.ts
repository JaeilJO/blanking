import axios from "axios";

export async function createGroup({
  subkey,
  groupname,
}: {
  subkey: string;
  groupname: string;
}) {
  return axios.post(`/api/group/${subkey}`, {
    groupname: groupname,
  });
}
