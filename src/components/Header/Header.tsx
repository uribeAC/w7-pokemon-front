import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <h1 className="title">POKEMON</h1>
      <img
        src="/pikachu.gif"
        alt="pikachu running"
        className="main-header__gif"
        width={80}
        height={57}
      />
    </header>
  );
};

export default Header;
