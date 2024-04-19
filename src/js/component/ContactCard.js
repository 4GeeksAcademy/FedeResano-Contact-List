import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const ContactCard = ({ contact }) => {
    const { actions } = useContext(Context);

    const navigate = useNavigate()

    const deleteContact = () => {
        actions.deleteContact(contact.id);
    }

    const goToEdit = () => {
        navigate(`/edit/${contact.id}`);
    }

    return (
        <div className="contact-card border-bottom border-secondary">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
                        alt={contact.name}
                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-4">
                    <h3 className="contact-name">{contact.name}</h3>
                    <div className="info-row d-flex align-items-center">
                        <FontAwesomeIcon icon={faEnvelope} className="info-icon" style={{ marginRight: '10px' }} />
                        <p >{contact.email}</p>
                    </div>
                    <div className="info-row d-flex align-items-center">
                        <FontAwesomeIcon icon={faPhone} className="info-icon" style={{ marginRight: '10px' }} />
                        <p>{contact.phone}</p>
                    </div>
                    <div className="info-row d-flex align-items-center">
                        <FontAwesomeIcon icon={faLocationDot} className="info-icon" style={{ marginRight: '10px' }} />
                        <p>{contact.address}</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-success m-2" onClick={goToEdit}>
                        <FontAwesomeIcon icon={faPencil} /> Edit
                    </button>
                    <button className="btn btn-danger m-2" onClick={() => deleteContact(contact.id)}>
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;