import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


const AddContact = () => {
    const { actions } = useContext(Context);
    const [newContact, setNewContact] = useState({
        image: "",
        name: "",
        address: "",
        phone: "",
        email: "",
    });

    const inputChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };

    const submitForm = (e) => {
        e.preventDefault();
        actions.addContact(newContact);
    }

    return (
        <div className="add-contact">
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name="name"
                        value="{newContact.name}"
                        onChange="{handleInputChange}"
                        placeholder="Enter full name"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputEmail" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        name="email"
                        value="{newContact.email}"
                        onChange="{inputChange}"
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="inputPhone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="inputPhone"
                        name="phone"
                        value="{newContact.phone}"
                        onChange="{inputChange}"
                        placeholder="Enter phone number"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="inputAddress">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        name="address"
                        value="{newContact.address}"
                        onChange="{inputChange}"
                        placeholder="Enter address"
                        required
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default AddContact;