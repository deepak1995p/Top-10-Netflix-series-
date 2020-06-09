import React from 'react'
import './netflix.css'

function NetflixCard(props) {
    return (
        <div className="cards">
          <div className="card">
             <img className="cardImage" src={props.img} alt="Img" />
             <div className="cardDetails">
                <span>{props.title}</span>
                <h3>{props.mname}</h3>
                <a href={props.target}  target = "blank">
                    <button className="btn">Watch now</button>
                </a>

             </div>
          </div>
          
            
        </div>
    )
}

export default NetflixCard
