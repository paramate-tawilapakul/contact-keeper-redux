import axios from 'axios';
import jsonHeader from '../utils/setContentTypeJson';
import * as API from '../api/paths';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from './types';

// Get Contacts
export const getContact = () => async dispatch => {
  try {
    const res = await axios.get(API.CONTACTS);
    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
  }
};

// Add Contact
export const addContact = contact => async dispatch => {
  try {
    const res = await axios.post(API.CONTACTS, contact, jsonHeader);
    dispatch({
      type: ADD_CONTACT,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: CONTACT_ERROR, payload: error.response.msg });
  }
};

// Update Contact
export const updateContact = contact => async dispatch => {
  try {
    const res = await axios.put(
      `${API.CONTACTS}/${contact._id}`,
      contact,
      jsonHeader
    );
    dispatch({
      type: UPDATE_CONTACT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: CONTACT_ERROR,
      payload: error.response.msg
    });
  }
};

// Delete Contact
export const deleteContact = id => async dispatch => {
  try {
    await axios.delete(`${API.CONTACTS}/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: CONTACT_ERROR,
      payload: error.response.msg
    });
  }
};

// Clear Contacts
export const clearContacts = () => {
  return {
    type: CLEAR_CONTACTS
  };
};

// Set Current Contact
export const setCurrent = contact => {
  return {
    type: SET_CURRENT,
    payload: contact
  };
};

// Clear Current Contact
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Filter Contacts
export const filterContacts = text => {
  return {
    type: FILTER_CONTACTS,
    payload: text
  };
};

// Clear Filter
export const clearFilter = text => {
  return {
    type: CLEAR_FILTER
  };
};
