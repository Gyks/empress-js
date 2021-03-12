import { getPicture } from '../merchants';
import { MessageContext } from 'vk-io';

// Chancellor Index
export const delegateOrder = async (context: MessageContext): Promise<void> => {
  const order = context?.text?.split(' ')[0]?.toLowerCase();
  if (order === 'соус') {
    const res = await getPicture();
    context.sendPhotos({ value: res });
  } else {
    context.send('Что??');
  }
};
