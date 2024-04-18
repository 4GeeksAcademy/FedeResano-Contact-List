import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context)
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [addressInput, setAddressInput] = useState("")
    const [errorText, setErrorText] = useState("")
    const { contactId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const findContact = () => {
            const matchingContact = store.contactList.find(
                (contact) => contact.id === contactId
            );

            if (matchingContact) {
                setNameInput(matchingContact.name);
                setEmailInput(matchingContact.email);
                setPhoneInput(matchingContact.phone);
                setAddressInput(matchingContact.address);
            } else {
                console.error("Error: Contact not found in store");
                setErrorText("Contact not found.");
            }
        };

        findContact();
    }, [store.contactList, contactId]);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validate) {
            actions.editContact({
                id: contactId,
                "name": nameInput,
                "email": emailInput,
                "agenda_slug": "fedeagenda",
                "phone": phoneInput,
                "address": addressInput
            })
            setNameInput("")
            setEmailInput("")
            setPhoneInput("")
            setAddressInput("")
            navigate("/")
        } else {
            console.error("Error al validar datos")
            setErrorText("Formato de datos incorrecto.")
        }
    }

    const validate = () => {
        if (!nameInput || nameInput.trim() === "") {
            console.error("Name required")
            setErrorText("Name required")
            return false
        }

        if (!emailInput || emailInput.trim() === "") {
            console.error("Email required")
            setErrorText("Email required")
            return false
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!regex.test(emailInput)) {
            console.error("Invalid email")
            setErrorText("Invalid email")
            return false
        }

        return true
    }

    return (
        <div className="container pt-4">
            <h2>Edit contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="inputName" className="form-label">Full name</label>
                    <input type="text" className="form-control" id="inputName" value={nameInput} onChange={(e) => setNameInput(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label for="inputPhone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="inputPhone" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" value={addressInput} onChange={(e) => setAddressInput(e.target.value)} required />
                </div>
                <p className="text-danger">{errorText}</p>
                <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to="/">  ← Go back home </Link>
                </div>
            </form>
        </div>
    );
};