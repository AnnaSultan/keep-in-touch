import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://www.freelogodesign.org/file/app/client/thumb/1d23cd4e-721c-4acf-b414-d347bf233e1c_200x200.png?1608428596632"
        alt="logo"
      />
    </header>
  );
};

export default Header;
