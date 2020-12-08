import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube logo"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) =>
            setInputSearch(e.target.value)
          } /*everytime typed in, update the value*/
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          {" "}
          {/* /*dinamically updates the url with the search iput by the user*/}
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="profile pic"
          src="https://avatars2.githubusercontent.com/u/64291327?s=460&u=e116a0926afa4c286e01ffdc1cab6fe043fe8b4e&v=4"
        />
        {/* my github profile image */}
      </div>
    </div>
  );
}

export default Header;
