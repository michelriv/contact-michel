const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://playground.4geeks.com/contact/agendas/michelriv"
	return {
		store: {
			contacts: []

		},
		actions: {
			findOrCreateAgenda: async()=>{
				let response = await fetch(apiUrl)
				if (response.status == 404) {
					fetch(apiUrl, {
						method: "POST", 
						"Content-Type": "application/json"
					})
					.then(resp=>{
						console.log(resp.json())
						getActions().getContacts()
					}
					
				)
				.catch(error=>console.log(error))
				}
				else{
					getActions().getContacts()
				}
			},
			getContacts: ()=>{
				fetch(apiUrl+"/contacts")
				.then(resp=>resp.json())
				.then(data=>setStore({contacts:data.contacts}))
				.catch(error=>console.log(error))
			},
			addContacts: ()=>{},
			editContacts: ()=>{},
			deleteContacts: ()=>{},

		}
	};
};

export default getState;
