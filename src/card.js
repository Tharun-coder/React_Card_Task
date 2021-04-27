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
        <p>
          {props.card.user === "Single User" ? (
            <>
              <i className="fa fa-check" aria-hidden="true"></i>{" "}
              {props.card.user}
            </>
          ) : (
            <>
              <i className="fa fa-check" aria-hidden="true"></i>{" "}
              <b>{props.card.user}</b>
            </>
          )}
        </p>
        <p>
          <i className="fa fa-check" aria-hidden="true"></i>{" "}
          {props.card.storage}
        </p>
        <p>
          <i className="fa fa-check" aria-hidden="true"></i>{" "}
          {props.card.projects}
        </p>
        <p>
          <i className="fa fa-check" aria-hidden="true"></i>{" "}
          {props.card.community}
        </p>
        {props.card.private.status === true ? (
          <p>
            <i className="fa fa-check" aria-hidden="true"></i>{" "}
            {props.card.private.name}
          </p>
        ) : (
          <p className="cross">
            <i className="fa fa-times" aria-hidden="true"></i>{" "}
            {props.card.private.name}
          </p>
        )}
        {props.card.support.status === true ? (
          <p>
            <i className="fa fa-check" aria-hidden="true"></i>{" "}
            {props.card.support.name}
          </p>
        ) : (
          <p className="cross">
            <i className="fa fa-times" aria-hidden="true"></i>{" "}
            {props.card.support.name}
          </p>
        )}
        {props.card.domain.status === true ? (
          <p>
            {props.card.domain.name.includes("Unlimited") ? (
              <>
                <i className="fa fa-check" aria-hidden="true"></i>{" "}
                <b>{props.card.domain.name}</b>
              </>
            ) : (
              <>
                <i className="fa fa-check" aria-hidden="true"></i>{" "}
                {props.card.domain.name}
              </>
            )}
          </p>
        ) : (
          <p className="cross">
            <i className="fa fa-times" aria-hidden="true"></i>{" "}
            {props.card.domain.name}
          </p>
        )}
        {props.card.reports.status === true ? (
          <p>
            <i className="fa fa-check" aria-hidden="true"></i>{" "}
            {props.card.reports.name}
          </p>
        ) : (
          <p className="cross">
            <i className="fa fa-times" aria-hidden="true"></i>{" "}
            {props.card.reports.name}
          </p>
        )}{" "}
      </div>
      <button className="btn btn-primary">Buy</button>
    </div>
  );
}

export default Card;
