const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships: [],
			favorites: []

		},
		actions: {
			addfavorites: (name) =>{
				let favorites= getStore().favorites
				favorites.push(name)
				setStore({favorites:favorites})
			},
			deletefavorites: (index) =>{
				let favorites= getStore().favorites
				let filteredFavorites= favorites.filter((item,idx)=>idx != index)
				setStore({favorites:filteredFavorites})
			},
			fetchCharacters: () =>{
				fetch("https://swapi.dev/api/people")
				.then((response)=> response.json())
				.then((data)=> {
					// console.log(data)
					setStore({characters:data.results})
				})
				.catch((error)=>{console.log(error)})
			},

			fetchPlanets: () =>{
				fetch("https://swapi.dev/api/planets")
				.then((response)=> response.json())
				.then((data)=> {
					// console.log(data)
					setStore({planets:data.results})
				})
				.catch((error)=>{console.log(error)})
			},
			
			fetchStarships: () =>{
				fetch("https://swapi.dev/api/starships")
				.then((response)=> response.json())
				.then((data)=> {
					//console.log(data)
					setStore({starships:data.results})
				})
				.catch((error)=>{console.log(error)})
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;