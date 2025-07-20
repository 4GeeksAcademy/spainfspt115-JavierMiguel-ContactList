import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { ContactCard } from "../components/ContactCard.jsx";
import { ContactForm } from "../components/ContactForm.jsx";

import {
	getInitialContacts,
	addContact,
	updateContact,
	deleteContact
} from "../services/ApiServices.js";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	const [contactToEdit, setContactToEdit] = useState(null);

	const dummyContacts = [
		{
			name: "Personajes",
			contacts: [
				{ id: 1, name: "Spiderman", email: "TuvecinoyAmigo@Spidy.com", phone: "123456789", address: "Madrid" },
				{ id: 2, name: "Cloud", email: "NubecitaTriste@FFVII.com", phone: "987654321", address: "Tokio" },
			],
		},
	];

	useEffect(() => {
		getInitialContacts(dispatch, dummyContacts[0].contacts);
	}, []);

	const handleAddContact = (newContact) => {
		addContact(dispatch, newContact);
	};

	const handleUpdateContact = (updatedContact) => {
		updateContact(dispatch, updatedContact);
		setContactToEdit(null);
	};

	const handleEditClick = (contact) => {
		setContactToEdit(contact);
	};

	return (
		<div className="text-center mt-5">
			<ContactCard
				ContactList={store.contacts}
				onEditClick={handleEditClick}
				onDeleteClick={(id) => deleteContact(dispatch, id)}
			/>
			<ContactForm
				contactToEdit={contactToEdit}
				onAdd={handleAddContact}
				onUpdate={handleUpdateContact}
			/>
		</div>
	);
};
