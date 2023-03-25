import React from "react";

export default function Card(Prop) {
  let badgeText

  if(Prop.openSpots === 0){
    badgeText = "Sold out"
  }else if(Prop.location === "Online"){
    badgeText = "Online"
  }

  return (
      <div className="card">
        <div className="card-image">
          <img src={`./images/${Prop.coverImg}`} />
          {badgeText && <span> {badgeText} </span>}
        </div>
        <div className="card-description">
          <div className="card-rating">
            <img className="star" src="./images/Star.png" />
            <span>{Prop.stats.rating}</span>
            <span>({Prop.stats.reviewCount})</span>
            <img className="elipse" src="./images/Ellipse.png" />
            <span>{Prop.location}</span>
          </div>
          <p className="card-title">{Prop.title}</p>
          <div className="card-cost">
            <span>From ${Prop.price}</span> / person
          </div>
        </div>
      </div>
  );
}
