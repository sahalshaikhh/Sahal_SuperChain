import React from "react";
import Button from "../button/Button";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="bg-black flex justify-between items-center py-8 px-14">
        <div className="logo text-white font-bold ">SAHAL</div>
        <div className="nav-items">
          <ul>
            <li className=" flex gap-12 text-lg text-[#e9d2c4] tracking-wider opacity-100">
              <a href="/">MEET THE TEAM</a>
              <a href="/">BACKERS</a>
              <a href="/">BLOG</a>
            </li>
          </ul>
        </div>
        <div className="btn">
          <Button />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
