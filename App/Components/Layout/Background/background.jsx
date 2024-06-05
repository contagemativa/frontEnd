import React from "react";

export default function Background({ ...props }) {
  return (
    <>
      <div className={props.className}>
          {props.children}
      </div>
    </>
  );
}
