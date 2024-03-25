import React, { useContext } from "react";
import { Context } from "../store/appContext";


const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);
    
    const deleteContact = () => {
        actions.deleteContact(contact.id);
    }

    return (
        <div className="contact-card">
            <img src={contact.image} alt={contact.name}></img>
            <p>{contact.full_name}</p>
            <FontAwesomeIcon icon={faEnvelope} /><p>{contact.email}</p>
            <FontAwesomeIcon icon={faPhone} /><p>{contact.phone}</p>
            <FontAwesomeIcon icon={faLocationDot} /><p>{contact.address}</p>
            <div className="contact-actions">
                <button>
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
