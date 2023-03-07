import React from "react";
import { useEffect, useState } from 'react'
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {    
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <nav>
      <h1>Nav</h1>
      {/* If desktop, show mega menu, otherwise, show mobile menu */}
      {isDesktop ? <MegaMenu /> : <MobileMenu />}
    </nav>
  );
}

export default Nav;