import React from "react";
import classes from "./Grafiks.module.css";
import Month from "./Month";

function Grafiks(props) {
  const augusts = props.grafiks.filter(
    (grafiks) => grafiks.MENESIS == "AUGUSTS"
  );
  const augustsContainer = augusts.map((item) => {
    return (
      <div>
        <div>
          {item.DATUMS +
            " " +
            item.MENESIS.toLowerCase() +
            " - " +
            item.PASAKUMS}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.headeryear}>ROTAĻA 2022/2023</div>
          <div className={classes.headertext}>
            Mēģinājumi: pirmdienās, trešdienās 19.30 – 22.30, piektdienas
            (papildus)
          </div>
        </div>
        <div className={classes.menesacontainer}>
          <Month grafiks={props.grafiks} monthname="AUGUSTS" />
        </div>
      </div>
    </div>
  );
}

export default Grafiks;
