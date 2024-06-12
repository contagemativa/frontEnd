import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ ...props }) {
  const navigate = useNavigate();

  return (
    <>
      <a href={navigate(`${props.changeComponent}`)}>
        <div className={`card shadow-md ${props.classCard}`}>
          <div className={`${props.cardTextColor}`}>
            {props.cardIcon}
            <h1 className="card-title">{props.cardText}</h1>
          </div>
        </div>
      </a>
    </>
  );
}
