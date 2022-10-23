import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <a href="/" className="site-title">
        Tracker
      </a>
      <ul>
        <li>
          <a href="/add">Add</a>
        </li>
        <li>
          <a href="/view">View</a>
        </li>
        <li>
          <a href="/delete">Delete</a>
        </li>
        <li>
          <a href="/update">Update</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
