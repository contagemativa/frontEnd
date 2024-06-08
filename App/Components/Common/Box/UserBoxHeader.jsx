import React from "react"
import User from "./UserBox";

export default function UserBoxHeader({...props}) {
  return (
    <User className={`${props.className} flex justify-center px-4 py-1 m-1 rounded-lg bg-secondary bg-opacity-40 invisible lg:visible`} />
  );
}
