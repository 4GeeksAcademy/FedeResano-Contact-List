import React ,{ useContext } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard";


const Contact = () => {
    const { actions, store } = useContext(Context)

    return (
        <div className="container">
            {store.contactList && store.contactList.length > 0 ? (store.contactList.map((contact) => (
                <ContactCard key={contact.id} contact={contact} onDelete={() => actions.deleteContact(contact.id)} />
                ))
            ) : (
                <p>No contacts found </p>
            )}
        </div>
    );
};

export default Contact;
