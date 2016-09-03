import * as types from './actionTypes';
import itemApi from '../api/mockItemApi';


export function signupStart(email, password){
	console.log('SIGNUP_START')
	return { type: types.SIGNUP_START, email, password }
}
export function signupSuccess(email, password){
	console.log('SIGNUP_SUCCESS')
	return { type: types.SIGNUP_SUCCESS, email, password }
}
export function signupError(error){
	console.log('SIGNUP_ERROR')
	return { type: types.SIGNUP_ERROR, error }
}

export function loginStart(email, password){
	console.log('LOGIN_START')
	return { type: types.LOGIN_START, email, password }
}
export function loginSuccess(email, password){
	console.log('LOGIN_SUCCESS')
	return { type: types.LOGIN_SUCCESS, email, password }
}
export function loginError(error){
	console.log('LOGIN_ERROR')
	return { type: types.LOGIN_ERROR, error }
}
export function logoutSuccess(){
	console.log('AUTH_LOGOUT')
	return { type: types.AUTH_LOGOUT }
}

// export const listenToAuth = (email, password) => {
// 	console.log('listenToAuth');
// 	return (dispatch, getState) => {
// 		function authDataCallback(authData) {
// 		  if (authData) {
// 		    console.log("User " + " is logged in with ");
// 				dispatch(loginSuccess(email, password));
// 		  } else {
// 		    console.log("User is logged out");
// 		  }
// 		}
// 	};
// };

export function signup(email, password){
	console.log('SIGNUP');
  return function(dispatch){
    dispatch(signupStart(email, password));
    return itemApi.getAllItems().then(items => {
        dispatch(signupSuccess(email, password));
      }).catch(error => {
        throw(error);
      });
  }
}



export function login(email, password) {
  console.log('LOGIN ' + email + ' ' + password)
  return function(dispatch) {
		dispatch(loginStart(email, password));
    return itemApi.getAllItems().then(items => {
      dispatch(loginSuccess(email, password));
    }).catch(error => {
      throw(error);
    });
  }
}


export const logoutUser = () => {
	console.log('logout')
	return (dispatch) => {
		dispatch(logoutSuccess());
	};
};
