import classes from "./NewPage.module.css";

function NewPage(props) {
  return (
    <div className={classes.container}>
      <div className={classes.text}>{props.text}</div>
    </div>
  );
}

export default NewPage;
