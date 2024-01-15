import React from "react";
import PropTypes from "prop-types";

const ContactCard = ({ contact }) => {

    return (
        <div className="contact-card">
            <img src={contact.image}></img>
            <p>{contact.name}</p>
            <p>{contact.address}</p>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        address: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
};

export default ContactCard;