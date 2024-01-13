import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const contactList = () => {

    const { store, actions } = useContext(Context);

    return (

        <div className="container">
            <ul className="contacts-group">
                {store.contactList.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className="contact-list-item"
                        >
                            <img>{store.contactList.image}</img>
                            <p>{store.contactList.name}</p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>{store.contactList.address}</p>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>{store.contactList.phone}</p>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>{store.contactList.email}</p>
                        </li>
                    );
                })}
            </ul>
        </div>

    );

}