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

  return (
    <form className={styles.nav_search} onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search by keywords..."
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit">
        <Image
          src="/search.svg"
          alt="save"
          width={18}
          height={18}
         />
      </button>
    </form>
  );
};

export default NavbarSearch;
