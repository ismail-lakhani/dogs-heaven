import React from 'react';
import '../../App.css';
import { Button } from '../ui-elements/Button.js';
import getDog from '../apiController'
import './Home.css';
//import Button from '@material-ui/core/Button';

import HeroSection from '../ui-elements/HeroSection.js';
import Footer from '../ui-elements/Footer.js';
import axios from "axios";
import fetch from 'node-fetch';

 function Home() {
  //Using dependencies injection to use it with other DB
 
  const [image, setImage] = React.useState('images/dog-heaven.jpeg');
  const api = "https://dog.ceo/api/breeds/image/random";

    function getDogPhoto() {
       axios.get(api)
      .then( response => setImage(response.data.message))
      .catch(err => {
          console.log("Error loading photo", err);
      });
  
    }

  return (
    <>
      <HeroSection > 
     </HeroSection>
     
    <Button className = 'button1' onClick={getDogPhoto}> 
    Lets Go... </Button> 
    <img src={image}  width="400" height="400" className= 'ranImage'/>
    <Footer />
    </>
  );
}

export default Home;
