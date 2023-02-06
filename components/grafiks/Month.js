import React from "react";
import classes from "./Month.module.css";

function Month(props) {
  const events = props.grafiks.filter(
    (grafiks) => grafiks.MENESIS == props.monthname
  );
  const eventitems = events.map((item) => {
    return (
      <div className={classes.eventcontainer}>
        <div className={classes.eventtext}>
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
    <div className={classes.container}>
      <div className={classes.monthname}>{props.monthname}</div>
      {eventitems}
    </div>
  );
}

export default Month;
