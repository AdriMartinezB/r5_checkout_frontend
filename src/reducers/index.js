import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.dataPlaca:
      console.log('actions dataplaca reducers', state, action.payload);
      return {
        ...state,
        placa: [action.payload],
      };
    case actions.dataUser:
      console.log('actions datauser reducers', state, action.payload);
      return {
        ...state,
        dataUser: [action.payload],
      };
    case actions.dataRequest:
      console.log('actions dataRequest reducers', state, action.payload);
      return {
        ...state,
        data: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
