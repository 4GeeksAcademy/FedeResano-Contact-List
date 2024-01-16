import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";


const AddContact = () => {
    const { actions } = useContext(Context);

    const defaultImage = "https://imgs.search.brave.com/a876Da81HKl25GlgRhekUOvAsbnK9T556iwGHh9_xVE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLWNsaXBhcnQv/MjAyMTA5MTcvb3Vy/bWlkL3BuZ3RyZWUt/ZXhxdWlzaXRlLXdl/YnBhZ2Utd2l0aC1h/dmF0YXItdXNlci1w/bGFjZWhvbGRlci1w/bmctaW1hZ2VfMzkx/MDExMS5qcGc";

    const [newContact, setNewContact] = useState({
        image: defaultImage,
        name: "",
        address: "",
        phone: "",
        email: "",
    });

    const [imagePreview, setImagePreview] = useState(defaultImage);

    const inputChange = (e) => {
        if (e.target.name === "image") {
            const file = e.target.files[0];
            setNewContact({ ...newContact, image: file })
            setImagePreview(URL.createObjectURL(file));
        } else {
            setNewContact({ ...newContact, [e.target.name]: e.target.value });
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        actions.addContact(newContact);
        setNewContact({
            image: defaultImage,
            name: "",
            email: "",
            phone: "",
            address: "",
        })
        history.push("/");
    }

    return (
        <div className="add-contact">
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="inputImage" className="form-label">
                        Profile picture
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="inputImage"
                        name="image"
                        accept="image/*"
                        onChange={inputChange}
                    />
                    {imagePreview && (<img src={imagePreview} alt="Profile picture" className="img-preview" />)}
                </div>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name="name"
                        value={newContact.name}
                        onChange={inputChange}
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
                        value={newContact.email}
                        onChange={inputChange}
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
                        value={newContact.phone}
                        onChange={inputChange}
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
                        value={newContact.address}
                        onChange={inputChange}
                        placeholder="Enter address"
                        required
                    />
                </div>
                <button type="submit">
                    Save contact
                </button>
            </form>
        </div>
    );
};

export default AddContact;