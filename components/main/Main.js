import React from "react";
import Image from "next/image";
import background1 from "../../public/rotala_background_desktop1.png";
import background2 from "../../public/rotala_background_desktop2.png";
import background3 from "../../public/rotala_background_desktop3.png";
import background4 from "../../public/rotala_background_desktop4.png";
import rotalaLogo from "../../public/Rotala_logo.png";
import facebook from "../../public/Plakatu_josla_FB.png";
import instagram from "../../public/Plakatu_josla_INSTA.png";
import youtube from "../../public/Plakatu_josla_YOUTUBE.png";
import { useState } from "react";
import classes from "./Main.module.css";
import Person from "./Person";
import NewPage from "./NewPage";

function Main() {
  const counter = Math.floor(Math.random() * 3);

  const backgroundImageSrc =
    counter === 1
      ? background1.src
      : counter === 2
      ? background2.src
      : counter === 3
      ? background3.src
      : background4.src;

  const [backgroundImage, setbackgroundImage] = useState(backgroundImageSrc);
  const backgroundStyling = {
    backgroundImage: `url('${backgroundImage}')`,
  };

  return (
    <div style={backgroundStyling} className={classes.container}>
      <div>
        <div className={classes.logoContainer}>
          <Image
            src={rotalaLogo}
            className={classes.imageLogo}
            alt="Rotaļa Logo"
          />
        </div>
        <div className={classes.socContainer}>
          <Image
            src={instagram}
            className={classes.instagram}
            alt="Instagram"
          />
          <Image src={facebook} className={classes.facebook} alt="facebook" />
          <Image src={youtube} className={classes.youtube} alt="youtube" />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <Person
          name="DIĀNA GAVARE"
          title="Mākslinieciskā vadītāja"
          email="gavarediana@gmail.com"
        />
        <NewPage text="TOP JAUNA LAPA" />
        <Person
          name="LĪVA BURMISTRE"
          title="Rotaļas prezidente"
          email="liva.burmistre@gmail.com"
        />
      </div>
    </div>
  );
}

export default Main;
