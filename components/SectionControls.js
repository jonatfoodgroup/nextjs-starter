import React from "react";
import Filter from "./Filter";
import Search from "./Search";
import Sort from "./Sort";

const SectionControls = () => {
  return (
    <div>
      <h1>SectionControls</h1>
      <Filter />
      <Sort />
      <Search />
    </div>
  );
}

export default SectionControls;