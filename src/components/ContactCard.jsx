import React, { useState } from "react";

export const ContactCard = ({ ContactList, onEdit, onDelete }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDeleteConfirmed = () => {
    onDelete(selectedContact.id);
    setSelectedContact(null);
  };

  return (
    <div className="container mt-4">
      <h3>Contact List</h3>

      {ContactList.map(contact => (
        <div key={contact.id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <img
              src="src/assets/img/rigo-baby.jpg"
              alt="Avatar"
              className="rounded-circle me-3"
              width="120"
              height="120"
            />
            <div>
              <h5>{contact.name}</h5>
              <p className="mb-1"><i className="fas fa-envelope me-2"></i>{contact.email}</p>
              <p className="mb-1"><i className="fas fa-phone me-2"></i>{contact.phone}</p>
              <p className="mb-0"><i className="fas fa-map-marker-alt me-2"></i>{contact.address}</p>
            </div>
            <div>
              <button
                className="btn btn-outline-primary btn-sm me-2"
                onClick={() => onEdit(contact)}
              >
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => setSelectedContact(contact)}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      ))}

      {selectedContact && (
        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Eliminar contacto</h5>
                <button className="btn-close" onClick={() => setSelectedContact(null)}></button>
              </div>
              <div className="modal-body">
                <p>¿Seguro que deseas eliminar a <strong>{selectedContact.name}</strong>?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setSelectedContact(null)}>
                  Cancelar
                </button>
                <button className="btn btn-danger" onClick={handleDeleteConfirmed}>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
