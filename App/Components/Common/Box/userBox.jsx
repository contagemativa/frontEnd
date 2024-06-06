import React from "react"
import config from "../../../config";

export default function User({ visible, ...props}) {
  return (
    <div tabIndex="0" role="button" style={{ display: visible ? 'flex' : 'none' }} className={`${props.className}`}>
      <div className={`${props.textColor}`}><b>ALUNO</b></div>
      <div className="divider divider-horizontal"></div>
      <div className={`${props.textColor}`}><b>{config.user}</b></div>
    </div>
  );
}






