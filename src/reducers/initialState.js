import * as types from '../actions/actionTypes';

export default {
  searchText: '',
  items: [],
  currentUser: {
    username: null,
  	uid: null,
  	status: types.AUTH_ANONYMOUS,
  }
};
