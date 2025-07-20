export const getInitialContacts = (dispatch, contacts) => {
  dispatch({
    type: "get_contacts",
    payload: contacts,
  });
};

export const addContact = (dispatch, newContact) => {
  dispatch({
    type: "add_contact",
    payload: newContact,
  });
};

export const updateContact = (dispatch, updatedContact) => {
  dispatch({
    type: "update_contact",
    payload: updatedContact,
  });
};

export const deleteContact = (dispatch, contactId) => {
  dispatch({
    type: "delete_contact",
    payload: contactId,
  });
};
