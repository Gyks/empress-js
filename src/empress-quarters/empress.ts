import { API_KEY } from '../chancellery/secret';
import { API, Updates, Upload } from 'vk-io';
import { delegateOrder } from '../executors';

const startApi = async (): Promise<any> => {
  try {
    const api = new API({
      token: API_KEY,
    });

    const upload = new Upload({
      api,
    });

    const updates = new Updates({
      api,
      upload,
    });

    updates.on('message_new', async context => {
      console.log({ ...context });
      console.log(context);
      delegateOrder(context);
    });

    updates.start();
  } catch (e) {
    console.error(e.message);
  }
};

startApi();
