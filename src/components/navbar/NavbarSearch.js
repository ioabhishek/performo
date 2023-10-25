"use client"
import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useSearchContext } from "@/utils/searContext";

const NavbarSearch = () => {
  const { setSearchInput } = useSearchContext();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchInput(inputText);
    console.log(inputText);
  };

  return (
    <form className={styles.nav_search} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search by keywords..."
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default NavbarSearch;
