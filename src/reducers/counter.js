import { INCREMENT_NUM, DECREMENT_NUM, RESET } from "../constants/ActionTypes";

export default function reducer(state = [0, 0], action) {
  if (!action.payload) return state;

  const { counterIndex, value } = action.payload;

  const updatedtState = [...state];

  switch (action.type) {
    case INCREMENT_NUM:
      updatedtState[counterIndex] = updatedtState[counterIndex] + value;
      return updatedtState;

    case DECREMENT_NUM:
      updatedtState[counterIndex] = updatedtState[counterIndex] - value;
      return updatedtState;

    case RESET:
      updatedtState[counterIndex] = value;
      return updatedtState;
  }

  return state;
}
