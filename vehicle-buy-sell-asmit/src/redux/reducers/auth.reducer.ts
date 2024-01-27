import { loginConstant } from '../constant';

const initState = {
  isOpen: false,
  isLoading: false,
  data: {},
  error: '',
  authenticate: false,
};

export const loginReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case loginConstant.LOGIN_REQUESTING:
      state = {
        ...state,
        isLoading: true,
      };
      break;
    case loginConstant.LOGIN_SUCCESS:
      state = {
        ...state,
        isLoading: false,
        authenticate: true,
        data: payload,
      };
      break;
    case loginConstant.LOGIN_FAILURE:
      state = {
        ...state,
        isLoading: false,
        authenticate: false,
        error: payload,
      };
      break;
  }
  return state;
};
