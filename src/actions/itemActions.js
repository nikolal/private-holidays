import * as types from './actionTypes';
import itemApi from '../api/mockItemApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

// ACTION CREATORS

export const loadItemsSuccess = (items) => {
  return { type: types.LOAD_ITEMS_SUCCESS, items};
}

export const createItemSuccess = (item) => {
  return {type: types.CREATE_ITEM_SUCCESS, item};
}

export const deleteItemSuccess = (item) => {
  return {type: types.DELETE_ITEM_SUCCESS, item};
}

export const filterItems = (searchText) => {
  return {type: types.FILTER_ITEMS, searchText};
}

// ASYNC

export const loadItems = () => {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return itemApi.getAllItems().then(items => {
      dispatch(loadItemsSuccess(items));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveItem(item) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return itemApi.saveItem(item).then(item => {
      item.id ? dispatch(updateItemSuccess(item)) :
        dispatch(createItemSuccess(item));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
