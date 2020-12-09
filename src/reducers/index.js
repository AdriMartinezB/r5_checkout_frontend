import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.dataCesta:
      return {
        ...state,
        dataCesta: [action.payload],
      };
    case actions.dataUser:
      return {
        ...state,
        dataUser: [action.payload],
      };
    case actions.dataRequest:
      return {
        ...state,
        data: [action.payload],
      };
    case actions.updateCesta:
      return {
        ...state,
        update: [action.payload],
      };
    case actions.setError:
      return {
        ...state,
        error: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
