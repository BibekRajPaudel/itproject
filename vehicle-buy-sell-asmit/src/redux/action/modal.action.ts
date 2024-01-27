export const modalAction = (payload: Boolean) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'MODAL_ACTION',
      payload: payload,
    });
  };
};
