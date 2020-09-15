import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export function incrementNum(counterIndex, value) {
  return {
    type: INCREMENT_NUM,
    payload: { counterIndex, value },
  };
}

export function decrementNum(counterIndex, value) {
  return {
    type: DECREMENT_NUM,
    payload: { counterIndex, value },
  };
}

export function resetNum(counterIndex, value) {
  return {
    type: RESET,
    payload: { counterIndex, value },
  };
}
