import React from "react";
import UserBoxHeader from "../../Common/Box/UserBoxHeader.jsx";
import { MdExitToApp } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import LogoWhite from "../../Common/Logo/LogoWhite.jsx";

export default function Header({ className }) {
  return (
    <header className="navbar bg-primary p-2 text-base-100">
      <div className="navbar-start rounded-r-2xl relative">
        <Link to={"/Home"}>
          <LogoWhite width={100} height={20} />
        </Link>
      </div>
      <div className="navbar-end">
        <div>
          <UserBoxHeader />
        </div>
        <button className="btn btn-ghost">
          <Link to={"/EmDesenvolvimento"}>
            <IoIosSettings size={25} />
          </Link>
        </button>
        <button className="btn btn-ghost">
          <Link to={"/"}>
            <MdExitToApp size={25} />
          </Link>
        </button>
      </div>
    </header>
  );
}
