import React from "react"
import User from "./UserBox";

export default function UserBoxMain({...props}) {
  return (
    <User className={`${props.className} flex justify-center p-4 m-1 bg-base-100 rounded-lg shadow-md shadow-gray-400 text-slate-700 visible lg:invisible`}/>
  );
}
