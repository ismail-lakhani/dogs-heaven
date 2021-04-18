import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import axios from "axios";
import HeroSection from "./ui-elements/HeroSection"
import NodeFetch from 'node-fetch' 

 export const getDog = fetch => {

  return fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return {
      message: data.message
    }
  })
 
}
export default getDog
console.log(getDog(fetch))
/*
 <div className='hero-btns'>

      <Button
      className='btns'
      onClick={getDogPhoto}
    >
      Lets go...
    </Button>
    <img src={image} alt="doggie" width="400" height="400"/>
      </div>
    </div>
*/ 