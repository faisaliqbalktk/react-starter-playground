import React from "react";

function Card(props) {
  return (
    <div className="card">
      {/* <div className="avatar">FI</div> */}
      <img src={props.image} alt="" className="avatar" />
      <h1>Name : { props.name }</h1>
      <h2>Age : { props.age }</h2>
      <h3>Profession : { props.profession }</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dolores?
      </p>
      <button className="card-btn">Connect</button>
    </div>
  );
}

export default Card;
