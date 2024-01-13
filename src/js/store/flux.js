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

			addContact: () => {

			},

			deleteContact: () => {
				
			},

			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
