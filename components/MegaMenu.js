import React, { useEffect } from "react";
import Carousel from "./Carousel";

const MegaMenu = () => {
  useEffect(() => {
    console.log("MegaMenu mounted");
    return () => {
      console.log("MegaMenu unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Mega Menu</h1>
      <Carousel />
    </div>
  );
}

export default MegaMenu;