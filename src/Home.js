import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />

          {/* Icons */}
          {/* Avatar */}
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://t4.ftcdn.net/jpg/04/30/03/37/360_F_430033749_KBqmtoc6vBioJ3ovKuZeKEBluAqtLoDW.jpg"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
