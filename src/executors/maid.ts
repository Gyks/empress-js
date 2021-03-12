import axios from 'axios';
import { SAUCE_NAO_TOKEN } from '../chancellery/secret';

const result = axios.get('https://saucenao.com/search.php', {
  params: {
    output_type: 2,
    api_key: SAUCE_NAO_TOKEN,
    db: 999,
    numres: 5,
    url: '',
  },
});
