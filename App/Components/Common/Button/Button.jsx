import React from 'react';

export default function Button({...props}) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.iconLeft}
      {props.buttonText}
      {props.iconRight}
    </button>
  );
}