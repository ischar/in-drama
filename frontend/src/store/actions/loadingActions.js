import { SET_LOADING } from '../types/loadingTypes';

export const setLoading = (isLoading) => ({
  type: SET_LOADING, 
  payload: isLoading,
});