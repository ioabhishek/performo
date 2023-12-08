"use client"
import React, { useState } from "react";
import Image from "next/image";
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
  };

  const clearer = () => {
    setInputText('');
    setSearchInput('');
  };

  return (
    <form className={styles.nav_search} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search by keywords..."
        value={inputText}
        onChange={handleInputChange}
      />
      <button className={styles.search_btn} type="submit">Search</button>
      <button className={styles.search_btn} onClick={clearer}>Clear</button>
    </form>
  );
};

export default NavbarSearch;
