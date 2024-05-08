import React from "react";
import { Link } from "react-router-dom";

const Bike = ({ bike }) => {
  const { _id, model, price, type, location, person } = bike;
  return (
    <div className="mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1552155634-312b6355173b?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Model: {model}</h2>
          <p>Type: {type}</p>
          <p>Price: {price}/hr</p>
          <p>Location: {location}</p>
          <p>Person:{person}</p>
          <div className="card-actions ">
            <Link to={`/bikes/${_id}`}>
              <button className="btn btn-primary w-full">Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bike;
