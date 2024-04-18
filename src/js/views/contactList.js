import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom"
import ContactCard from "../component/ContactCard.js"

export const ContactList = () => {
    const { store, actions } = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate(Context)


    const goToAddContact = () => {
        navigate("/add")
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await actions.loadAgendaContacts();
                setIsLoading(false)
                console.log(store.contactList)
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
                {isLoading ? (
                    <p>Loading contacts...</p>
                ) : (
                    store.contactList.length === 0 ? (
                        <p>No contacts found</p>
                    ) : (
                        store.contactList.map((contact) => (
                            <ContactCard key={contact.id} contact={contact} />
                        ))
                    )
                )}
            </div>
        </div>
    );
};