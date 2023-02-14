import React, { useState } from "react";
import Jautajumi from "./Jautajumi";
import classes from "./Spele.module.css";

function Spele(props) {
  const [name, setName] = useState("");
  const [atbilde1, setAtbilde1] = useState("");
  const [atbilde2, setAtbilde2] = useState("");
  const [atbilde3, setAtbilde3] = useState("");
  const [atbilde4, setAtbilde4] = useState("");
  const [atbilde5, setAtbilde5] = useState("");
  const [atbilde6, setAtbilde6] = useState("");
  const [atbilde7, setAtbilde7] = useState("");
  // const [atbilde8, setAtbilde8] = useState("");
  const [atbilde9, setAtbilde9] = useState("");
  const [atbilde10, setAtbilde10] = useState("");
  const [atbilde11, setAtbilde11] = useState("");
  const [atbilde12, setAtbilde12] = useState("");
  const [atbilde13, setAtbilde13] = useState("");
  // const [atbilde14, setAtbilde14] = useState("");
  const [atbilde15, setAtbilde15] = useState("");
  const [atbilde16, setAtbilde16] = useState("");
  // const [atbilde17, setAtbilde17] = useState("");
  // const [atbilde18, setAtbilde18] = useState("");
  // const [atbilde19, setAtbilde19] = useState("");
  // const [atbilde20, setAtbilde20] = useState("");

  const [nameMissing, setNameMissing] = useState(false);
  const [showAnswersSubmitted, setShowAnswersSubmitted] = useState(false);

  const saveResponse = async () => {
    if (name.length == 0) {
      setNameMissing(true);
      setShowAnswersSubmitted(false);

      return;
    } else {
      setNameMissing(false);
    }

    const response = await fetch("/api/submitanswers", {
      method: "POST",
      body: JSON.stringify({
        VARDS: name,
        ATBILDE1: atbilde1,
        ATBILDE2: atbilde2,
        ATBILDE3: atbilde3,
        ATBILDE4: atbilde4,
        ATBILDE5: atbilde5,
        ATBILDE6: atbilde6,
        ATBILDE7: atbilde7,
        // ATBILDE8: atbilde8,
        ATBILDE9: atbilde9,
        ATBILDE10: atbilde10,
        ATBILDE11: atbilde11,
        ATBILDE12: atbilde12,
        ATBILDE13: atbilde13,
        // ATBILDE14: atbilde14,
        ATBILDE15: atbilde15,
        ATBILDE16: atbilde16,
        // ATBILDE17: atbilde17,
        // ATBILDE18: atbilde18,
        // ATBILDE19: atbilde19,
        // ATBILDE20: atbilde20,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setShowAnswersSubmitted(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headercontainer}>
        <div className={classes.headertext}>SPĒLĒ SPĒLI</div>
        <div className={classes.headerdescription}>
          APRAKSTS: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
      </div>
      <div className={classes.inputcontainer}>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="Ievadi kā tevi dēvēt..."
          className={classes.nameinput}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="1"
        value={setAtbilde1}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="2"
        value={setAtbilde2}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="3"
        value={setAtbilde3}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="4"
        value={setAtbilde4}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="5"
        value={setAtbilde5}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="6"
        value={setAtbilde6}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="7"
        value={setAtbilde7}
      />
      {/* <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="8"
        value={setAtbilde8}
      /> */}
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="9"
        value={setAtbilde9}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="10"
        value={setAtbilde10}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="11"
        value={setAtbilde11}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="12"
        value={setAtbilde12}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="13"
        value={setAtbilde13}
      />
      {/* <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="14"
        value={setAtbilde14}
      /> */}
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="15"
        value={setAtbilde15}
      />
      <Jautajumi
        jautajumi={props.jautajumi}
        jautajums="16"
        value={setAtbilde16}
      />
      <button onClick={saveResponse} className={classes.button}>
        SAGLABĀT
      </button>
      {nameMissing && <div className={classes.text}>NAV IEVADĪTS VĀRDS</div>}
      {showAnswersSubmitted && (
        <div className={classes.text}>
          ATBILDES IESNIEGTAS, JA IZDOMĀ VĒL KĀDU ATBILDI, TAD VARI PAPILDINĀT,
          BET IZMANTO TO PAŠU VĀRDU
        </div>
      )}
    </div>
  );
}

export default Spele;
