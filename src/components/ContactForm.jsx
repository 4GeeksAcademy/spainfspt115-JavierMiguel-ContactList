import React, { useState, useEffect } from "react";

export const ContactForm = ({ contactToEdit, onAdd, onUpdate }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (contactToEdit) {
      setForm(contactToEdit);
    } else {
      setForm({ name: "", email: "", phone: "", address: "" });
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactToEdit) {
      onUpdate(form);
    } else {
      onAdd(form);
    }
    setForm({ name: "", email: "", phone: "", address: "" });
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title mb-4">{contactToEdit ? "Edit Contact" : "Add New Contact"}</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="  form-control"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              <i className="fas fa-save me-2"></i>
              {contactToEdit ? "Update Contact" : "Save Contact"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
