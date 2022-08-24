import { language, currency } from '../global';
import { APP_CONSTANT } from './global';

export const totalPrice = (item) => {
    item.User.items.reduce((a,v)=> a + v.price, 0).toLocaleString(language, {
        style: APP_CONSTANT.STYLE.CURRENCY,
        currency: currency
    })
}