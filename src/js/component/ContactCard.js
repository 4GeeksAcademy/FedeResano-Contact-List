import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ContactCard = ({ contact }) => {

    const { actions } = useContext(Context);

    const editContact = () => {
        actions.editContact()
    }

    const deleteContact = () => {
        actions.deleteContact(contact.id);
    }

    return (
        <div className="contact-card">
            <img src={contact.image} alt={contact.name}></img>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
            <div className="contact-actions">
                <button onClick={editContact}>
                    <i className="fas fa-pencil-alt"></i> Edit
                </button>
                <button onClick={deleteContact}>
                    <i className="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;