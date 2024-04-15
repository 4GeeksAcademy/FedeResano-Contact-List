import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { AddContact } from "./views/addContact";
import { ContactList } from "./views/contactList";
import { EditContact } from "./views/editContact";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<ContactList />} />
						<Route path="/add" element={<AddContact />} />
						<Route path="/edit/${contactId}" element={<EditContact />} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);