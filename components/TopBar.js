import React from "react";
import styles from "@/styles/TopBar.module.css";
import Social from "./SocialIcon";
import LanguageSelector from "./LanguageSelector";
import Section from "./Section";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <LanguageSelector />
      <Social />
      <Section />
    </div>
  );
}

export default TopBar;