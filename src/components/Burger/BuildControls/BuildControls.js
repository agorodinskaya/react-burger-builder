import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Beetroot", type: "beetroot" },
  { label: "Falafel", type: "falafel" },
  { label: "Cucumber", type: "cucumber" },
  { label: "Cheese", type: "cheese" },
  { label: "Eggplant", type: "eggplant" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map((ctrl) => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default buildControls;
