const CONTACT_LIST = "javimv";
const BASE_URL = `https://playground.4geeks.com/contact/agendas/${CONTACT_LIST}/contacts`;

export const getInitialContacts = async (dispatch) => {
  const res = await fetch(BASE_URL);
  if (res.ok) {
    const data = await res.json();
    dispatch({
      type: "get_contacts",
      payload: data.contacts,
    });
  } else {
    console.log("Error at GET contacts !!");
  }
};

export const addContact = async (dispatch, newContact) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newContact),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch({
      type: "add_contact",
      payload: data,
    });
  } else {
    console.log("Error at POST contact !!");
  }
};

export const updateContact = async (dispatch, updatedContact) => {
  const res = await fetch(`${BASE_URL}/${updatedContact.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedContact),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch({
      type: "update_contact",
      payload: data,
    });
  } else {
    console.log("Error at PUT contact");
  }
};

export const deleteContact = async (dispatch, contactId) => {
  const res = await fetch(`${BASE_URL}/${contactId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch({
      type: "delete_contact",
      payload: contactId,
    });
  } else {
    console.log("Error at DELETE contact");
  }
};
