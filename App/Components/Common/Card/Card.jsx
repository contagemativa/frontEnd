import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ ...props }) {
  return (
    <>
      <Link to={props.link}>
        <div className={`card shadow-md ${props.classCard}`}>
          <div className={`${props.cardTextColor}`}>
            {props.cardIcon}
            <h1 className="card-title">{props.cardText}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}
