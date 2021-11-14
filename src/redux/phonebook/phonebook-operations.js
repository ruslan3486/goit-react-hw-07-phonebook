import axios from "axios";
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
} from "./phonebook-actions";

axios.defaults.baseURL = "http://localhost:3000/";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSucces(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

export const addContact = (name, phone) => (dispatch) => {
  const contacts = { name, phone };

  dispatch(addContactsRequest());

  axios
    .post("/contacts", contacts)
    .then(({ data }) => dispatch(addContactsSucces(data)))
    .catch((error) => dispatch(addContactsError(error)));
};

export const deleteContact = (contactId) => (dispatch) => {
  dispatch(delContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(delContactSucces(contactId)))
    .catch((error) => dispatch(delContactError(error)));
};
