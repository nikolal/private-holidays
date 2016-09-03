import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState, action) {
	// console.log(action)
	switch (action.type) {
		case types.AUTH_OPEN:
			return {
				status: types.AUTH_AWAITING_RESPONSE,
				username: 'guest',
				// uid: null
			};
      case types.SIGNUP_SUCCESS:
      console.log('REDUCER_SIGNUP')
  			return {
  				status: types.AUTH_LOGGED_IN,
  				username: action.email,
  				password: action.password,
  				// uid: action.uid
  			};
		case types.LOGIN_SUCCESS:
    console.log('REDUCER_LOGIN')
			return {
				status: types.AUTH_LOGGED_IN,
				username: action.email,
				password: action.password,
				// uid: action.uid
			};
		case types.AUTH_LOGOUT:
			return {
				status: types.AUTH_ANONYMOUS,
				username: 'guest',
				// uid: null
			};
		default: return state;
	}
};
