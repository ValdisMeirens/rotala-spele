import React from "react";
import classes from "./Jautajumi.module.css";
import Image from "next/image";

function Jautajumi(props) {
  const findJautajums = props.jautajumi.filter(
    (jautajums) => jautajums.ID == props.jautajums
  );
  const createJautajumsOutput = findJautajums.map((question) => {
    return (
      <div key={question.ID} className={classes.picturecontainer}>
        <div className={classes.imagecontainer}>
          <Image
            src={`/jautajumi/${question.BILDE1}`}
            width={100}
            height={100}
            alt={question.ID}
            className={classes.image}
          />
        </div>
        <div className={classes.imagecontainer}>
          <Image
            src={`/jautajumi/${question.BILDE2}`}
            width={100}
            height={100}
            alt={question.ID}
            className={classes.image}
          />
        </div>
        <div className={classes.imagecontainer}>
          <Image
            src={`/jautajumi/${question.BILDE3}`}
            width={100}
            height={100}
            alt={question.ID}
            className={classes.image}
          />
        </div>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => props.value(e.target.value)}
        />
      </div>
    );
  });
  return <div>{createJautajumsOutput}</div>;
}

export default Jautajumi;
