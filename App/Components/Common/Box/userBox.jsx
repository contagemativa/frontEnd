import React from "react"
import config from "../../../config";

export default function User({ visible, ...props }) {
  return (
    <div tabIndex="0" role="button" style={{ display: visible ? 'flex' : 'none' }} className="flex justify-center p-4 m-1 bg-base-100 rounded-lg shadow-md shadow-gray-400">
      <div className="text-gray-600"><b>ALUNO</b></div>
      <div className="divider divider-horizontal"></div>
      <div className="text-gray-600"><b>{config.user}</b></div>
    </div>
  );
}






