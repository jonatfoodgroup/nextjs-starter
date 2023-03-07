import React from "react";
import { useEffect } from 'react'
import Date from "./Date";
import Like from "./Like";
import Share from "./Share";
import Thumbnail from "./Thumbnail";

const Card = () => {
  useEffect(() => {
    console.log('Card mounted')
    return () => {
      console.log('Card unmounted')
    }
  }, [])
  return (
    <div>
      <h1>Card</h1>
      <Thumbnail />
      <Date />
      <Like />
      <Share />
    </div>
  );
}

export default Card;