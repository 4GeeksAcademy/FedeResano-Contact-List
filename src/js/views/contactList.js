import React, { useContext, useEffect } from "react"
import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom"
import Contact from "../component/contact.js"

export const ContactList = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.loadData()
    }, []) 

    return (
            <div className="contact-view">
                <h2>Contacts </h2>
                <Link to="/add"><button className="btn btn-success">Add a contact</button></Link>
                <Contact />
            </div> 
    )
}
