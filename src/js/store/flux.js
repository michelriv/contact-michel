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
			addNewContact: async (newContact) => {
				try{
					console.log(newContact)
					const result = await fetch("https://playground.4geeks.com/contact/agendas/michelriv/contacts",{
						method: "POST",
						body: JSON.stringify(newContact),
						headers:{
							'Content-type': 'application/json'
						}
					})
					const data = await result.json()
					
					if(result.ok){
						const store = getStore()
						setStore({...store, contacts: [ ...store.contacts, newContact]})
						console.log("Contact uploaded",data)
					}

				}catch(error){

					console.log("Something went wrong", error)

				}

			},
			editContacts: ()=>{},
			deleteContacts: async ()=>{
				try{

					const result = await fetch(`https://playground.4geeks.com/contact/agendas/michelriv/contacts/${id}`,{
						method: "DELETE"
					})
					if(result.ok){
						const data = await result.json()
						console.log("Contact deleted", data)
						const {getContacts} = getActions()
						getContacts()
					}
					

				}catch(error){

					console.log("There was an error",error)

				}
			},

		}
	};
};

export default getState;
