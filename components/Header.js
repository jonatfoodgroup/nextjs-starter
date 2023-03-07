import React from "react";
import styles from "@/styles/Header.module.css";
import { useEffect } from 'react'
import Logo from "./Logo";
import Nav from "./Nav";
import Search from "./Search";
import TopBar from "./TopBar";

const Header = ({
  isSticky,
}) => {
  useEffect(() => {
    console.log('Header mounted')
    return () => {
      console.log('Header unmounted')
    }
  }, [])
  return (
    <header className={styles.header}>
      <h1>Header</h1>
      <TopBar />
      <Logo />
      <Nav />
      <Search />
    </header>
  );
}

export default Header;