import Service from '@/setup/network';
import { stationConstant } from '../constant';

export const stationAction = () => {
  return async (dispatch: any) => {
    try {
      const { data } = await Service.get('/stations');
      console.log('Dagtaa', data);
      dispatch({
        type: stationConstant.STATION_GET_ALL_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: stationConstant.STATION_GET_ALL_FAILURE,
        payload: err.response?.data.error,
      });
    }
  };
};
