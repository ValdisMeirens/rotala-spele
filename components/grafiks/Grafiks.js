import React from "react";
import classes from "./Grafiks.module.css";
import Month from "./Month";

function Grafiks(props) {
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
          <Month grafiks={props.grafiks} monthname="SEPTEMBRIS" />
          <Month grafiks={props.grafiks} monthname="OKTOBRIS" />
          <Month grafiks={props.grafiks} monthname="NOVEMBRIS" />
          <Month grafiks={props.grafiks} monthname="DECEMBRIS" />
          <Month grafiks={props.grafiks} monthname="JANVĀRIS" />
          <Month grafiks={props.grafiks} monthname="FEBRUĀRIS" />
          <Month grafiks={props.grafiks} monthname="MARTS" />
          <Month grafiks={props.grafiks} monthname="APRĪLIS" />
          <Month grafiks={props.grafiks} monthname="MAIJS" />
          <Month grafiks={props.grafiks} monthname="JŪNIJS" />
          <Month grafiks={props.grafiks} monthname="JŪLIJS" />
        </div>
      </div>
    </div>
  );
}

export default Grafiks;
