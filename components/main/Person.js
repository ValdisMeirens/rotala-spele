import classes from "./Person.module.css";

function Person(props) {
  return (
    <div className={classes.container}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.email}>{props.email}</div>
    </div>
  );
}

export default Person;
