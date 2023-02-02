import React from "react";
import classed from "./Month.module.css";

function Month(props) {
  const events = props.grafiks.filter(
    (grafiks) => grafiks.MENESIS == props.monthname
  );
  const eventitems = events.map((item) => {
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
      <div>{props.monthname}</div>
      {eventitems}
    </div>
  );
}

export default Month;
