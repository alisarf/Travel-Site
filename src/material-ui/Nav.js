import React, { useState } from "react";
import { Typography } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import arrow from "../assets/images/media/arrow.svg";

import "../css/style.css";
import "../css/utilities/reset.css";
import "../css/general.css";
import content from "../assets/content/content.json";

//GET DESTINATIONS FROM JSON:
const potlocations = [];
for (var i in content) {
  potlocations.push(i);
}

const Nav = (props) => {
  const printHeart = () => {
    //console.log(props.heart)
  };

  //navigation appears on hoverstate
  const [navBtn, setNavBtn] = useState(false);
  const [navView, setNavView] = useState(false);
  const [toggleOverflow, setToggleOverflow] = useState(false);
  const [hoverDest, setHoverDest] = useState(false);

  function handleChange() {
    setNavBtn(!navBtn);
  }
  //Toggle the Nav Mobile Menu and passively toggle scroll on html tag
  function viewNav() {
    setNavView(!navView);
    setToggleOverflow(!toggleOverflow);
    toggleOverflowSwitch(toggleOverflow);
  }

  //Toggle the html tags scroll (doesn't work with body tag)
  function toggleOverflowSwitch(toggleOverflow) {
    if (toggleOverflow == false) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }
  //Hover destination in md to show options
  function toggleHoverDest() {
    setHoverDest(!hoverDest);
  }

  return (
    <nav className="z-100 flex w-4/5 m-auto py-2 justify-between items-center tracking-widest w-container">
      <Link to="/">
        <h2 className="Dark Special_Title Black font-bold text-center uppercase">
          Globe Travel
        </h2>
      </Link>
      <button
        className={`${navView === true ? "z-10" : ""} md:hidden`}
        onClick={viewNav}
      >
        <MenuIcon />
      </button>
      <div
        className={`Nav__hamburgerToggle Dark Black_Bg items-center bg-none transition-opacity ${
          navView === true
            ? "flex flex-col -right-1/5 top-0 absolute bg-white"
            : "hidden"
        } md:flex md:flex-row md:relative`}
      >
        <div
          className="inline-block relative h-fit Nav-h-min"
          onMouseLeave={handleChange}
          onMouseEnter={handleChange}
        >
          <button
            className="Test123 Roboto_Condensed Black p-4 h-fit tracking-wider font-bold text-4xl mt-5 mb-2 md:mx-3 md:my-0 md:text-lg md:font-light transition-colors md:hover:text-indigo-600"
            onMouseEnter={toggleHoverDest}
            onMouseLeave={toggleHoverDest}
          >
            Destinations
            {/*Start: HOVER FOR MD OPTIONS*/}
            <div
              className={`Nav__modal top-12 p-4 left-0 hidden rounded-xl ${
                hoverDest === true ? "md:block " : ""
              }`}
            >
              <div className="Nav__modal--triangle"></div>
              <ul className=" text-left">
                {potlocations.map((city) => (
                  <li className="px-2 py-1 w-full transition hover:bg-indigo-50">
                    <Link
                      to={`/${city}`}
                      className="Nav_modal--link Dark Roboto_Condensed font-thin text-xl capitalize"
                    >
                      <img src={arrow} className="w-4 inline-block mr-3" />
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/*End: HOVER FOR MD OPTIONS*/}
          </button>
          <div
            className={`top-12 left-0 md:hidden ${
              navBtn === true ? "block " : ""
            }`}
          >
            <ul>
              {potlocations.map((city) => (
                <li
                  className="p-2 w-full rounded-md cursor-pointer transition hover:bg-indigo-50"
                  onClick={viewNav}
                >
                  <Link
                    to={`/${city}`}
                    className="Nav__hamburger--link Dark Roboto_Condensed font-thin text-2xl capitalize"
                  >
                    <img src={arrow} className="w-4 inline-block mr-3" />
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <a
            className="Dark block cursor-pointer Roboto_Condensed Black tracking-wider mt-5 mb-2 font-bold text-4xl md:text-lg md:font-light md:inline-block md:mx-3 md:my-0 transition-colors md:hover:text-indigo-600"
            onClick={viewNav}
          >
            About us
          </a>
          <a
            className="Dark block cursor-pointer Roboto_Condensed Black tracking-wider mt-5 mb-2 font-bold text-4xl md:text-lg md:font-light md:inline-block md:mx-3 md:my-0 transition-colors md:hover:text-indigo-600"
            onClick={viewNav}
          >
            Contact
          </a>
        </div>
        {/*
          <div className='inline-block m-3'>
              <Link to='/favorites'>
                  <FavoriteRoundedIcon 
                    sx={{ color: 'pink' , cursor: 'pointer','&:hover': { color: 'hotpink',}}} 
                    onClick={printHeart}
                  />
              </Link>
          </div>
        */}
      </div>
    </nav>
  );
};

export default Nav;
