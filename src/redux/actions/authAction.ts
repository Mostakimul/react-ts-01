import { Dispatch } from "redux";
import { authActionTypes } from "redux/types";
import AuthService from "services/Auth.service";
import { authActionType } from "./../types";

const login = (payload: ILoginData) => {
  return (dispatch: Dispatch<authActionType>) => {
    dispatch({
      type: authActionTypes.LOGIN_PENDING,
    });
    AuthService.login(payload)
      .then((user) =>
        dispatch({
          type: authActionTypes.LOGIN_SUCCESS,
          payload: user,
        })
      )
      .catch((err) => {
        dispatch({
          type: authActionTypes.LOGIN_FAIL,
          payload: err?.response?.data?.message,
        });
      });
  };
};

export default login;
