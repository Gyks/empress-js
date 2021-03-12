import axios from 'axios';
import { DNBR_AUTH } from '../chancellery/secret';

const baseUrl = 'https://danbooru.donmai.us/';
export const getPicture = async () => {
  const res = await axios.get(`${baseUrl}posts/random.json`, {
    auth: DNBR_AUTH,
  });
  return res.data.large_file_url;
};
