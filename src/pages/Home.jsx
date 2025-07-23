import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { deleteContact, getInitialContacts } from "../services/ApiServices";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();


	useEffect(() => {
		if (store.contacts.length === 0) {
			getInitialContacts(dispatch);
		}
	}, [dispatch, store.contacts]);


	return (
		<div className="text-center mt-5">
			<ContactCard
				ContactList={store.contacts}
				onDelete={(id) => deleteContact(dispatch, id)}
			/>
		</div>
	);
};
