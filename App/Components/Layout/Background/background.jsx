import React from "react";
import "./Background.css"

export default function Background({ ...props }) {
  return (
    <>
      <div className={`background h-72 bg-primary lg:bg-transparent ${props.className}`}>
          {props.children}
      </div>
    </>
  );
}
