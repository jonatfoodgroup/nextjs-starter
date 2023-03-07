import React from "react";
import styles from "@/styles/TopBar.module.css";
import Social from "./Social";
import LanguageSelector from "./LanguageSelector";
import Section from "./Section";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <h1>Top Bar</h1>
      <LanguageSelector />
      <Social />
      <Section />
    </div>
  );
}

export default TopBar;