import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoaded(false));
      const data = await axios.get(`https://6253d32089f28cf72b534eb1.mockapi.io/pizzas`);
      dispatch({
        type: 'SET_PIZZAS',
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
