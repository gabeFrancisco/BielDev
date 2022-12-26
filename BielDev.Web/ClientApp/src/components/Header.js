import React from "react";

import "./Header.css";

import Avatar from "../assets/avatar.jpg";
// import Mountain from '../assets/mountain.jpg'

export default function Header() {
  return (
    <header>
      <div className="Logo-Area">
        <img src={Avatar} id="Avatar" alt="Avatar" />
        <h3>Gabriel Francisco</h3>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Tecnologias</li>
          <li>Sobre mim</li>
        </ul>
      </div>
      {/* <div className="Mountain-Area">
                <img src={Mountain} id="Mountain" alt="Mountain"/>
            </div> */}
    </header>
  );
}
