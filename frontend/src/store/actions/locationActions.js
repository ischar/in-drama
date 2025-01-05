export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const showModal = (location) => ({ type: SHOW_MODAL, isModalOpen: true, location:location  });
export const closeModal = () => ({ type: CLOSE_MODAL, isModalOpen: false, location: null });
