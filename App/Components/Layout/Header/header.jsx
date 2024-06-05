import React from "react"
import User from "./userBox";

export default function Header(){
  return (
    <header class="navbar">
      <div class="navbar-start rounded-r-2xl ">
        <h1>Contagem Ativa</h1>
      </div>

      <div class="navbar-end">
        <div class="dropdown dropdown-end">
          <User/>
          <ul tabindex="0" class="dropdown-content z-[1] menu shadow-md bg-secondary rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        <div class="divider divider-horizontal divider-secondary"></div>
        <button class="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
        </button>
      </div>
    </header>
  );
}

