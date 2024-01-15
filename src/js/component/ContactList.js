import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "./ContactCard";
import getState from "../store/flux";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadData();
    }, []);

    return (
        <div className="contact-list">
            {store.contactList.map((contact, index) => (<ContactCard key={index} contact={contact} />
            ))}
        </div>
    );
};

export default ContactList;