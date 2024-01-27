const initState = {
  isOpen: false,
};

export const modalReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case 'MODAL_ACTION':
      state = {
        ...state,
        isOpen: payload,
      };
      break;
  }
  return state;
};
