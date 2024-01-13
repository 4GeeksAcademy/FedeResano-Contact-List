const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contactList: [
				{
					image: "",
					name: "",
					address: "",
					phone: "",
					email: "",
				}
			]
		},
		actions: {
			loadData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			updateData: () => {
				
			},

			addContact: () => {

			},

			deleteContact: () => {
				
			}
		}
	};
};

export default getState;
