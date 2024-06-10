import React from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Card({ ...props }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="card w-full shadow-lg">
        <div className="card-body text-primary">
          {props.cardIcon}
          <h2 className="card-title">{props.CardText}</h2>
        </div>
      </div>
    </>
  );
}
