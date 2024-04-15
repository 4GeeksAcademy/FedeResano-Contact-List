import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const ContactCard = ({ contact }) => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate()

    const deleteContact = () => {
        actions.deleteContact(contact.id);
    }

    const goToEdit = () => {
        navigate(`/edit/${contact.id}`);
    }

    return (
        <div className="contact-card">
            <img src={contact.image} alt={contact.name}></img>
            <p>{contact.name}</p>
            <FontAwesomeIcon icon={faEnvelope} /><p>{contact.email}</p>
            <FontAwesomeIcon icon={faPhone} /><p>{contact.phone}</p>
            <FontAwesomeIcon icon={faLocationDot} /><p>{contact.address}</p>
            <div className="contact-actions">
                <button onClick={goToEdit}>
                    <FontAwesomeIcon icon={faPencil} /> Edit
                </button>
                <button onClick={deleteContact}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;