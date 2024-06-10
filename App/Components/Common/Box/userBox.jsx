import React from "react"
import config from "../../../config";

export default function User({...props}) {
  return (
    <div tabIndex="0" role="button" className={`${props.className}`}>
      <div className={`${props.textColor}`}><b>ADM</b></div>
      <div className="divider divider-horizontal"></div>
      <div className={`${props.textColor}`}><b>{config.user}</b></div>
    </div>
  );
}






