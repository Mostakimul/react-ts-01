import { cartActionTypes } from "redux/types";

export const add_to_cart = (payload: IProduct) => {
  return {
    type: cartActionTypes.ADD_TO_CART,
    payload: payload,
  };
};

export const remove_from_cart = (id: string) => {
  return {
    type: cartActionTypes.REMOVE_FROM_CART,
    payload: id,
  };
};

export const clear_cart = () => {
  return {
    type: cartActionTypes.CLEAR_CART,
  };
};

type x = ReturnType<typeof add_to_cart>;
type y = ReturnType<typeof remove_from_cart>;
type z = ReturnType<typeof clear_cart>;

export type cartActionType = x | y | z;
