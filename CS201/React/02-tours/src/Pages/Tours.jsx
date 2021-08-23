import React from "react";
import Item from "../Components/Item";

const Tours = ({ tours, removeTour, fetchTours }) => {
  return (
    <div>
      <section className="tours">
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map(tour => {
            return <Item removeTour={ removeTour } key={ tour.id } { ...tour } />;
          })}
        </div>
        <button className="btn" onClick={ fetchTours }>Refresh</button>
      </section>
    </div>
  );
};

export default Tours;
