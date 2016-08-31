import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_ITEMS_SUCCESS:

      return {
        items: action.items,
        searchText: ''
      };

    case types.CREATE_ITEM_SUCCESS:
      return [
        ...state,
        Object.assign({}, {
          items: action.items,
          searchText: ''
        })
      ];

    case types.DELETE_ITEM_SUCCESS:
      return [
        ...state.filter(item => item.id !== action.item.id),
        Object.assign({}, action.item),
        searchText
      ];

    case types.FILTER_ITEMS:
      return Object.assign({}, state, {
          searchText: action.searchText
      });

    default:
      return state;
  }
}
