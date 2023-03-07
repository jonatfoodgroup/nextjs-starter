import React, { useEffect } from "react";
import Article from "./Article";
import Card from "./Card";
import Filter from "./Filter";
import List from "./List";
import Tabs from "./Tabs";
import Tags from "./Tags";
import Sort from "./Sort";

const TopicCuration = () => {
  useEffect(() => {
    console.log("Topic Curation mounted");
    return () => {
      console.log("Topic Curation unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Topic Curation</h1>
      <Card />
      <Filter />
      <Sort />
      <Tabs />
      <Article />
      <List />
      <Tags />
    </div>
  );
}

export default TopicCuration;