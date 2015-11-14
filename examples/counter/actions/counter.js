import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter';

export const inc = () => { type: INCREMENT_COUNTER };
export const dec = () => { type: DECREMENT_COUNTER };
