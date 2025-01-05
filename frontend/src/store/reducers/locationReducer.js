import { SHOW_MODAL, CLOSE_MODAL } from "../actions/locationActions";

const initialState = {
  isModalOpen: false,
  location: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        isModalOpen: action.isModalOpen,
        location: action.location,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: action.isModalOpen,
        location: action.location,
      };
    default:
      return state;
  }
};

export default locationReducer;
