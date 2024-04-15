import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom"
import ContactCard from "../component/ContactCard.js"

export const ContactList = () => {
    const { store, actions } = useContext(Context)
    const navigate = useNavigate(Context)

    const goToAddContact = () => {
        navigate("/add")
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await actions.loadAgendaContacts();
                console.log("store.contactList:", store.contactList)
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="contact-view pt-4">
            <div className="container">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-success" onClick={goToAddContact}>
                        Add a contact
                    </button>
                </div>
                <h2>Contacts </h2>
                {store.contactList ? (store.contactList.length > 0 ? (
                    store.contactList.map((contact) => (
                        <ContactCard key={contact.id} contact={contact} />
                    ))
                ) : (
                    <p>No contacts found</p>
                )) : <p>Loading contacts..</p>
                }
            </div>
        </div>
    );
};