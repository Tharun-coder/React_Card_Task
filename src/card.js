import React, { Component } from "react";

function Card(props) {
  return (
    <div className="card">
      <b className="card-name">{props.card.name}</b>
      <p className="card-price">
        {props.card.price}
        <span className="card-price-month">/month</span>
      </p>
      <hr></hr>
      <div className="card-info">
        {props.card.offers.map((offer) => {
          return (
            <>
              <p className={offer.isEnabled ? "" : "text-muted"}>
                <i
                  className={offer.isEnabled ? "fa fa-check" : "fa fa-times"}
                  aria-hidden="true"
                ></i>{" "}
                {offer.name}
              </p>
            </>
          );
        })}
      </div>
      <button className="btn btn-primary">Buy</button>
    </div>
  );
}

export default Card;
