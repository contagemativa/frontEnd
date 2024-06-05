import React from "react";

export default function Body(...props) {
  return (
    <>
      <div className={props.className}>
        {props.children}
      </div>
    </>
  );
}