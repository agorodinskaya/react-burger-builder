import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="salad" />
      <BurgerIngredient type="cucumber" />
      <BurgerIngredient type="falafel" />
      <BurgerIngredient type="beetroot" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
