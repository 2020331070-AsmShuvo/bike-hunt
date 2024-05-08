import axios from "axios";
import React, { useEffect, useState } from "react";
import Bike from "../BIke/Bike";

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/bikes").then((data) => {
      setBikes(data.data);
    });
  }, []);
  console.log(bikes);
  return (
    <div className="my-10">
      <h1 className="text-center ">Total Bikes : {bikes.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {bikes.map((bike) => (
          <Bike key={bike._id} bike={bike} />
        ))}
      </div>
    </div>
  );
};

export default Bikes;
