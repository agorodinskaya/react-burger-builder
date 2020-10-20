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
    <p className={classes.Price}>Current price : <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.moreIngredient(ctrl.type)}
        removed={() => props.lessIngredient(ctrl.type)}
        disabled = {props.disabled[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled = {!props.purchasable} onClick={props.ordered}>Order now</button>
  </div>
);

export default buildControls;
