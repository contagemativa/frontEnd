import React from "react";
import UserBoxHeader from "../../Common/Box/UserBoxHeader.jsx";
import { MdExitToApp } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoReorderThreeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogoWhite from "../../Common/Logo/LogoWhite.jsx";
import MediaQuery from "react-responsive";

export default function Header({ className }) {
  return (
    <header className="navbar bg-primary p-2 text-base-100">
      <div className="navbar-start rounded-r-2xl relative">
        <Link to={"/Home"}>
          <LogoWhite width={100} height={20} />
        </Link>
      </div>
      <div className="navbar-end">
        <MediaQuery minWidth={1024}>
          <div>
            <UserBoxHeader />
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1023}>
          <div>
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <label htmlFor="my-drawer" className="btn btn-ghost bg-opacity-10 text-white">
                <IoReorderThreeSharp size={25} />
              </label>
            <div className="drawer-side" style={{zIndex:1}}>
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4" >
                {/* Sidebar content here */}
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
          </div>
        </MediaQuery>      
        <Link to={"/EmDesenvolvimento"}> 
          <button className="btn btn-ghost">
              <IoIosSettings size={25} />
          </button>
        </Link>
        <Link to={"/"}>
          <button className="btn btn-ghost">
            <MdExitToApp size={25} />
          </button>
        </Link>
      </div>
    </header>
  );
}
