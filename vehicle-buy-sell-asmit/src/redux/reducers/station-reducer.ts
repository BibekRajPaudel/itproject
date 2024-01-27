import { stationConstant } from '../constant';

const initState = {
  stationGetResponse: '',
  stationUsGetError: '',
};

export const stationReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case stationConstant.STATION_GET_ALL_SUCCESS:
      state = {
        ...state,
        stationGetResponse: payload,
      };
      break;
    case stationConstant.STATION_GET_ALL_FAILURE:
      state = {
        ...state,
        stationUsGetError: payload,
      };
  }
  return state;
};
