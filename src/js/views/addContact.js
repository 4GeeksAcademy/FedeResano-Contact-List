import React, { useState, useContext, useNavigate } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContacto = () => {
    const { actions } = useContext(Context)
    const [ nameInput, setNameInput ] = useState("")
    const [ emailInput, setEmailInput ] = useState("")
    const [ phoneInput, setPhoneInput ] = useState("")
    const [ addressInput, setAddressInput ] = useState("")
    const [ errorText, setErrorText ] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(validate) {
            actions.addContact({
                "full_name": nameInput,
                "email": emailInput,
                "agenda_slug": "agenda_fede",
                "phone": phoneInput,
                "address": addressInput
            })
            setNameInput("")
            setEmailInput("")
            setPhoneInput("")
            setAddressInput("")
            navigate("/")
        }else {
            console.error("Error al validar datos")
            setErrorText("Formato de datos incorrecto.")
        }
    }

    const validate = () => {
        if(!nameInput || nameInput.trim() === ""){
            console.error("Name required")
            setErrorText("Name required")
            return false
        }

        if(!emailInput || emailInput.trim() === ""){
            console.error("Email required")
            setErrorText("Email required")
            return false
        }

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!regex.test(emailInput)){
            console.error("Invalid email")
            setErrorText("Invalid email")
            return false
        }

        return true
    }

    return (
        <div className="container">
            <h2>Add a new contact</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="inputName" class="form-label">Full name</label> 
                    <input type="text" class="form-control" id="inputName" value={nameInput} onChange={(e) => setNameInput(e.target.value)} required /> 
                </div>
                <div class="mb-3">
                    <label for="inputEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="inputEmail" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} required/>
                </div>
                <div class="mb-3">
                    <label for="inputPhone" class="form-label">Phone</label>
                    <input type="tel" class="form-control" id="inputPhone" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} required /> 
                </div>
                <div className="mb-3">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" value={addressInput} onChange={(e) => setAddressInput(e.target.value)} required /> 
                </div>
                <p className="text-danger">{errorText}</p>
                <button type="submit" class="btn btn-primary">Save</button>
                <Link to="/">← Go back home </Link>
            </form>
        </div>
	);
};
