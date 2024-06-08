import React from "react";
import  UserBoxHeader from "../../Common/Box/UserBoxHeader.jsx";
import { MdExitToApp } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

export default function Header({className}) {
  return (
    <header className="navbar bg-primary p-2 text-base-100">
      <div className="navbar-start rounded-r-2xl ">
        <h1>Contagem Ativa</h1>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <UserBoxHeader/>
          <ul
            tabIndex="0"
            className="dropdown-content z-[1] menu shadow-md bg-secondary rounded-box w-52"
          >
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-ghost">
          <IoIosSettings size={25}/>
        </button>
        <button className="btn btn-ghost">
          <MdExitToApp size={25}/>
        </button>
      </div>
    </header>
  );
}
