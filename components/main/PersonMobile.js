import classes from "./PersonMobile.module.css";

function PersonMobile(props) {
  return (
    <div className={classes.container}>
      <div className={classes.container1}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.email}>{props.email}</div>
      </div>
      <div className={classes.container2}>
        <div className={classes.title}>{props.title}</div>
      </div>
    </div>
  );
}

export default PersonMobile;
