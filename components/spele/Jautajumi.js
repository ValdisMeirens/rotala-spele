import React from "react";
import classes from "./Jautajumi.module.css";
import Image from "next/image";

function Jautajumi(props) {
  const findJautajums = props.jautajumi.filter(
    (jautajums) => jautajums.ID == props.jautajums
  );
  const createJautajumsOutput = findJautajums.map((question) => {
    return (
      <div className={classes.container} key={question.ID}>
        <div key={question.ID} className={classes.picturecontainer}>
          <div className={classes.imagecontainer}>
            <Image
              src={`/jautajumi/${question.BILDE1}`}
              width={1000}
              height={1000}
              alt={question.ID}
              className={classes.image}
            />
          </div>
          <div className={classes.imagecontainer}>
            <Image
              src={`/jautajumi/${question.BILDE2}`}
              width={1000}
              height={1000}
              alt={question.ID}
              className={classes.image}
            />
          </div>
          <div className={classes.imagecontainer}>
            <Image
              src={`/jautajumi/${question.BILDE3}`}
              width={1000}
              height={1000}
              alt={question.ID}
              className={classes.image}
            />
          </div>
        </div>
        <div className={classes.answercontainer}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Atbilde..."
            className={classes.answerinput}
            onChange={(e) => props.value(e.target.value)}
          />
        </div>
      </div>
    );
  });
  return <div>{createJautajumsOutput}</div>;
}

export default Jautajumi;
