import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";

import {
  fetchContactsRequest,
  fetchContactsSucces,
  fetchContactsError,
  addContactsRequest,
  addContactsSucces,
  addContactsError,
  delContactRequest,
  delContactSucces,
  delContactError,
  changeFilter,
} from "./phonebook-actions";

const contactsReducer = createReducer(
  [],

  {
    [fetchContactsSucces]: (_, { payload }) => payload,
    [addContactsSucces]: (state, { payload }) => [...state, payload],
    [delContactSucces]: (state, { payload }) =>
      state.filter((contact) => {
        return contact.id !== payload;
      }),
  }
);

const loadingReducer = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSucces]: () => false,
  [fetchContactsError]: () => false,

  [addContactsRequest]: () => true,
  [addContactsSucces]: () => false,
  [addContactsError]: () => false,

  [delContactRequest]: () => true,
  [delContactSucces]: () => false,
  [delContactError]: () => false,
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const counterReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
});

export default counterReduser;
