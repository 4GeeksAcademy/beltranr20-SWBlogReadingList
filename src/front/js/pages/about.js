import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const About =() =>{
    const{store,actions}=useContext(Context)
    let params = useParams()
    let type = params.type
    let id = parseInt(params.id)
    let item
    let field 
    if(type=== "character"){
        item=store.characters[id]
        field = 
            <div className="about-container">
                <h2>{item.name}</h2>
                <div className="about-main">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id + 1}.jpg`} className="card-img-top" alt=""/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="about-footer">
                    <p>Hair Color: {item.hair_color}</p>
                    <p>Eye Color: {item.eye_color}</p>
                    <p>Mass: {item.mass}</p>
                    <p>Gender: {item.gender}</p>
                    <p>Height: {item.height}</p>
                </div>
            </div>
    }else if(type==="planet"){
        item=store.planets[id]
        field = 
            <div className="about-container">
                <h2>{item.name}</h2>
                <div className="about-main">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id + 1}.jpg`} className="card-img-top" alt=""/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="about-footer">
                    <p>Rotation Period: {item.rotation_period}</p>
                    <p>Orbital Period: {item.orbital_period}</p>
                    <p>Diameter: {item.diameter}</p>
                    <p>Climate: {item.climate}</p>
                    <p>Gravity: {item.gravity}</p>
                </div>
            </div>
    }else{
        item=store.starships[id]
        field = 
            <div className="about-container">
                <h2>{item.name}</h2>
                <div className="about-main">
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${id + 1}.jpg`} className="card-img-top" alt=""/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className="about-footer">
                    <p>Cost in Credits: {item.cost_in_credits}</p>
                    <p>Length: {item.length}</p>
                    <p>Crew: {item.crew}</p>
                    <p>Passengers: {item.passengers}</p>
                    <p>Consumables: {item.consumables}</p>
                </div>
            </div>
    }
    console.log(item)
    return (
        <div>
            {field}
        </div>
    )
}
export default About