import { LoginPayload } from '@/types';
import { loginConstant } from '../constant';
import axios from 'axios';

export const loginAction = (payload: LoginPayload) => {
  return async (dispatch: any) => {
    dispatch({
      type: loginConstant.LOGIN_REQUESTING,
    });
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_LOGIN_BASE_URL}/auth/login`,
        payload
      );
      console.log('dataa', data);
      dispatch({
        type: loginConstant.LOGIN_REQUESTING,
        payload: data,
      });
    } catch (err: any) {
      console.log('Etror', err?.response?.data);
      dispatch({
        type: loginConstant.LOGIN_FAILURE,
        payload: err?.response?.data?.message,
      });
    }
  };
};
export const loginAction = (payload: LoginPayload) => {
  return async (dispatch: any) => {
    dispatch({
      type: loginConstant.LOGIN_REQUESTING,
    });
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_LOGIN_BASE_URL}/auth/login`,
        payload
      );
      console.log('dataa', data);
      dispatch({
        type: loginConstant.LOGIN_REQUESTING,
        payload: data,
      });
    } catch (err: any) {
      console.log('Etror', err?.response?.data);
      dispatch({
        type: loginConstant.LOGIN_FAILURE,
        payload: err?.response?.data?.message,
      });
    }
  };
};
