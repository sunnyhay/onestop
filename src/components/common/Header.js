import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "blue",
    textDecoration: "none",
  };
  return (
    <header className="header-nav">
      <nav className="header-nav-class">
        <a className="header-nav-logo" href="/">
          <span className="header-nav-logo-span">一站式留学服务</span>
        </a>
        <div className="header-nav-wrapper">
          <ul className="header-nav-items">
            <li className="header-nav-item">
              <NavLink
                to="/"
                className="header-nav-item-navlink"
                activeStyle={activeStyle}
                exact
              >
                首页
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/dest"
                className="header-nav-item-navlink"
                activeStyle={activeStyle}
              >
                目的地
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/study"
                className="header-nav-item-navlink"
                activeStyle={activeStyle}
              >
                留学
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/work"
                className="header-nav-item-navlink"
                activeStyle={activeStyle}
              >
                工作
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/service"
                className="header-nav-item-navlink"
                activeStyle={activeStyle}
              >
                特色服务
              </NavLink>
            </li>
            <li className="header-nav-item">
              <NavLink
                to="/about"
                className="header-nav-item-navlink"
                activeStyle={activeStyle}
              >
                关于我们
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header-signin">
          <button className="btn btn-primary">登录</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
