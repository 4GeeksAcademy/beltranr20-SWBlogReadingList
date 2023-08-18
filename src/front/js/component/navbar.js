import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store,actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul class="dropdown-menu">
							{store.favorites.map((item,index)=>{
								return(
									<li>
										<a class="dropdown-item" href="#">{item}</a>
										<button className="btn btn-danger" onClick={()=> actions.deletefavorites(index)}>del</button>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
