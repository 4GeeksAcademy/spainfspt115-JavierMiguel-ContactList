import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate, useParams } from "react-router-dom";
import { updateContact, addContact } from "../services/ApiServices";

export const ContactForm = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    id: null,
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    console.log(id);
    
    if (id) {
      const contactToEdit = store.contacts.find(contact => contact.id === Number(id));
      if (contactToEdit) {
        setForm(contactToEdit);
      }
    }
    else {
      setForm({
        id: null,
        name: "",
        email: "",
        phone: "",
        address: ""
      });
      
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.id) {
      await updateContact(dispatch, form);
    } else {
      const { id, ...contactWithoutId } = form;
      await addContact(dispatch, contactWithoutId);
    }

    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-4">{form.id ? "Edit Contact" : "Add New Contact"}</h4>
          <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} required className="form-control mb-2" placeholder="Name" />
            <input name="email" value={form.email} onChange={handleChange} required className="form-control mb-2" placeholder="Email" />
            <input name="phone" value={form.phone} onChange={handleChange} className="form-control mb-2" placeholder="Phone" />
            <input name="address" value={form.address} onChange={handleChange} className="form-control mb-3" placeholder="Address" />
            <button type="submit" className="btn btn-primary w-100">
              {form.id ? "Update Contact" : "Save Contact"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
