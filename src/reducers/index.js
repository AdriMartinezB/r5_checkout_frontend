import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.dataPlaca:
      console.log('actions dataplaca reducers', state, action);
      return {
        card: [...state, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
