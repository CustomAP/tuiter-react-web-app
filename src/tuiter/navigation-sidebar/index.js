import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    "home",
    "explore",
    "notifications",
    "messages",
    "bookmarks",
    "lists",
    "more",
  ];
  return (
    <div className="list-group">
      {currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "profile" ? "active" : ""
          }`}
          to="/tuiter/profile"
        >
          Profile
        </Link>
      )}
      {!currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "login" ? "active" : ""
          }`}
          to="/tuiter/login"
        >
          {" "}
          Login{" "}
        </Link>
      )}
      {!currentUser && (
        <Link
          className={`list-group-item text-capitalize ${
            active === "register" ? "active" : ""
          }`}
          to="/tuiter/register"
        >
          Register
        </Link>
      )}
      {links.map((link) => (
        <Link
          to={`/tuiter/${link}`}
          className={`list-group-item text-capitalize ${
            active === link ? "active" : ""
          }`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
};
export default NavigationSidebar;
