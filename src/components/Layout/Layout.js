import React from "react";
import classes from "./Layout.module.css";
import Aux from "../../hoc/Aux";
const layout = (props) => (
  <Aux>
    <div className={classes.Content}>Toolbar, Sidedraw, Backdrop</div>
    <section className={classes.Header}>
      <h1>Veggeterian burger:</h1>
    </section>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
