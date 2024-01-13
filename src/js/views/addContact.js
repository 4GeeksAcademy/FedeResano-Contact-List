import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";


export const addContact = () => {

    return (

        <div className="container">
            <form>
                <h2>Add a new contact</h2>
                <div class="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="name" class="form-control" id="inputName" placeholder="Enter full name"></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Enter email"></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Phone</label>
                    <input type="phone" class="form-control" id="inputPhone" placeholder="Enter phone"></input>
                </div>
                <div class="mb-3">
                    <label className="form-label">Address</label>
                    <input type="address" class="form-control" id="inputAddress" placeholder="Enter address"></input>
                </div>

                <button type="submit" class="btn btn-primary">save</button>
                <a href="">or get back to contacts</a>
            </form>
        </div>
    );
}