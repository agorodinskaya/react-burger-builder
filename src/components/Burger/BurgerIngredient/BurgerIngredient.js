import React, { Component } from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

class BurgerIngredients extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "beetroot":
        ingredient = <div className={classes.Beetroot}></div>;
        break;
      case "falafel":
        ingredient = <div className={classes.Falafel}></div>;
        break;
      case "cucumber":
        ingredient = <div className={classes.Cucumber}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "eggpplant":
        ingredient = <div className={classes.Eggplant}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
//will be used to check that the ingredient is in the right format
BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};
export default BurgerIngredients;
