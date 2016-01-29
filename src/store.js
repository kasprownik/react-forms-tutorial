import * as c from './constants';
import assign from 'lodash.assign';

const initialState = { //define initial state - an empty form
  values: {}
};

export default (state = initialState, action) => {
  switch (action.type) {

  case c.FORM_UPDATE_VALUE:
    return assign({}, state, {
      values: assign({}, state.values, {
        [action.name]: action.value
      })
    });

  case c.FORM_RESET:
    return initialState;

  default:
    return state;
  }
}
