import React from "react";
import Logo from "../pages/HeaderComp/Logo";
import { Link } from "react-router-dom";
const UserLeftBlock = () => {
  return (
    <div className="userLeftBlock">
      <main>{/* <Logo /> */}</main>
      <div style={{ marginLeft: "14px" }}>
        <ul>
          <li>
            <Link to="/userHome/music-home">
              <svg
                role="img"
                height="24"
                width="24"
                class="Svg-sc-1bi12j5-0 hDgDGI home-icon"
                viewBox="0 0 24 24"
              >
                <path d="M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"></path>
              </svg>
              <span style={{ marginLeft: "2px" }}> Home</span>
            </Link>
          </li>
          <li>
            <a href="">
              <svg
                role="img"
                height="24"
                width="24"
                class="Svg-sc-1bi12j5-0 hDgDGI search-icon"
                viewBox="0 0 24 24"
              >
                <path d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"></path>
              </svg>
              <span style={{ marginLeft: "2px" }}> Search </span>
            </a>
          </li>
          <li>
            <a href="">
              <svg
                role="img"
                height="24"
                width="24"
                class="Svg-sc-1bi12j5-0 hDgDGI collection-icon"
                viewBox="0 0 24 24"
              >
                <path d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"></path>
              </svg>
              <span style={{ marginLeft: "2px" }}> Your Library </span>
            </a>
          </li>
        </ul>
        <ul id="secondsec">
          <li>
            <Link to="create-playlist" style={{ paddingTop: "27px" }}>
              <i class="fas fa-plus-square"></i>
              <span>Create Playlist</span>
            </Link>
          </li>
          <li>
            <a href="" style={{ paddingTop: "0px" }}>
              <i class="fad fa-heart-square"></i>
              Liked Songs
            </a>
          </li>
        </ul>
        <p id="line"></p>
        <p style={{ color: "#fff", margin: "11px" }}>My PlayList #1</p>
        <div className="parentp">
          <p
            style={{ color: "#fff", margin: "11px", top: "25px" }}
            className="childp"
          >
            <i class="far fa-arrow-circle-down" style={{ padding: "2px" }}></i>
            Install App
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLeftBlock;
