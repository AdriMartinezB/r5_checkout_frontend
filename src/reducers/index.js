import { actions } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.dataCesta:
      console.log('actions Cesta reducers', state, action.payload);
      return {
        ...state,
        dataCesta: [action.payload],
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
    case actions.updateCesta:
      console.log('cesta updated', state, action.payload);
      return {
        ...state,
        update: [action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
