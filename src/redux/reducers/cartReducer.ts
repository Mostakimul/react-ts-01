import { cartActionTypes } from "./../types";

function cartReducer(state: IProduct[] = [], action: any) {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return [...state, action.payload];
    case cartActionTypes.REMOVE_FROM_CART:
      return state.filter((item) => item._id !== action.payload.id);
    case cartActionTypes.CLEAR_CART:
      return [];
    default:
      return state;
  }
}

export default cartReducer;
