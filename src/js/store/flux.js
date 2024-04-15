const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: []

		},
		actions: {
			apiFetch: async (endpoint, method = "GET", body = null) => {
				try {
					let params = {
						method,
						headers: {
							"Access-Control-Allow-Origin": "*"
						}
					};

					if (body !== null) {
						params.body = JSON.stringify(body),
							params.headers["Content-Type"] = "application/json";
					}
					let resp = await fetch("https://playground.4geeks.com/contact/" + endpoint, params);

					if (!resp.ok) {
						console.error(resp.statusText);
						return { error: resp.statusText }
					}

					return resp
				} catch (error) {
					console.error("Error:", error)
				}
			},

			loadAgendaContacts: async () => {
				try {
					const resp = await getActions().apiFetch(`agendas/fedeagenda/contacts`, "GET");
					const data = await resp.json();
					setStore({ contactList: data });
				} catch (error) {
					console.error("Error fetching data: ", error);
				}
			},

			addContact: async (newContact) => {
				try {
					const resp = await getActions().apiFetch("agendas/fedeagenda/contacts", "POST", {
						newContact
					});
					const data = await resp.json();
					setStore({ contactList: [...getStore().contactList, data] });
				} catch (error) {
					console.error("Error adding contact: ", error);
				}
			},

			editContact: async (contactId, updatedContact) => {
				try {
					const resp = await getActions().apiFetch(`agendas/fedeagenda/contacts/${contactId}`, "GET", updatedContact);
					const data = await resp.json();
					const updatedList = getStore().contactList.map(contact => (contact.id === contactId ? data : contact));
					setStore({ contactList: updatedList });
				} catch (error) {
					console.error("Error editing contact: ", error);
				}
			},

			deleteContact: async (contactId) => {
				const userConfirmed = window.confirm("Are you sure you want to delete this contact?");
				if (!userConfirmed) {
					return;
				}

				try {
					const resp = await getActions().apiFetch(`/agendas/fedeagenda/contacts/${contactId}`, "DELETE",)
					if (!resp.ok) {
						console.error("Error fetching backend")
						return
					}
					const updatedList = getStore().contactList.filter(contact => contact.id !== contactId);
					setStore({ contactList: updatedList });
				} catch (error) {
					console.error("Error deleting contact: ", error);
				}
			}
		}
	};
};

export default getState;