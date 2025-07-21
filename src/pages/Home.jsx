import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { ContactCard } from "../components/ContactCard";
import { getInitialContacts } from "../services/ApiServices";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();


	useEffect(() => {
		if (store.contacts.length === 0) {
			const dummyContacts = [
				{ id: 1, name: "Spiderman", email: "TuvecinoyAmigo@Spidy.com", phone: "123456789", address: "Madrid" },
				{ id: 2, name: "Cloud", email: "NubecitaTriste@FFVII.com", phone: "987654321", address: "Tokio" },
			];
			getInitialContacts(dispatch, dummyContacts);
		}
	}, [dispatch, store.contacts]);


	return (
		<div className="text-center mt-5">
			<ContactCard
				ContactList={store.contacts}
				onDelete={(id) => dispatch({ type: "delete_contact", payload: id })}
			/>
		</div>
	);
};
