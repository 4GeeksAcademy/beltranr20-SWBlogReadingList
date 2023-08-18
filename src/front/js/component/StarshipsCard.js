import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const StarshipsCard=(props)=>{
    const{store,actions}=useContext(Context)
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${props.id + 1}.jpg`} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.ships.name}</h5>
                <p className="card-text">Model: {props.ships.model}</p>
                <p className="card-text">Manufacturer: {props.ships.manufacturer}</p>
                <Link to={"/about/starship/"+ props.id}>
                    <span className="btn btn-primary">Learn More!</span>
                </Link>
                <button className="btn btn-secondary" onClick={() => actions.addfavorites(props.ships.name)}>Fav </button>
            </div>
        </div>
    )
}
export default StarshipsCard