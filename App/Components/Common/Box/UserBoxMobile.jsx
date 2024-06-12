import React from "react";
import { FaUserCircle } from "react-icons/fa";
import UserBoxMain from "./UserBoxMain";

export default function UserBoxMobile({ ...props }) {
  return (
    <div className="lg:invisible grid justify-items-center visible ">
      <div className="flex justify-center">
        <FaUserCircle size={120} color="white" />
      </div>
      <div className="my-10">
        <UserBoxMain />
      </div>
    </div>
  );
}
