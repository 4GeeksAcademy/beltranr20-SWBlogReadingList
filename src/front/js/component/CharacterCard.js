import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterCard=(props)=>{
    const{store,actions}=useContext(Context)
    return(
        <div className="card" style={{width: "18rem"}}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.char.name}</h5>
                <p className="card-text">Height: {props.char.height}</p>
                <p className="card-text">Mass: {props.char.mass}</p>
                <Link to={"/about/character/"+ props.id}>
                    <span className="btn btn-primary">Learn More!</span>
                </Link>
                <button className="btn btn-secondary" onClick={() => actions.addfavorites(props.char.name)}>Fav </button>
            </div>
        </div>
    )
}
export default CharacterCard