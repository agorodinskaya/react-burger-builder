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
        ingredient = (
          <div className={classes.Beetroot}>
            <p>beetroot</p>
          </div>
        );
        break;
      case "falafel":
        ingredient = (
          <div className={classes.Falafel}>
            <p>falafel</p>
          </div>
        );
        break;
      case "cucumber":
        ingredient = (
          <div className={classes.Cucumber}>
            <p>cucumber salad</p>
          </div>
        );
        break;
      case "cheese":
        ingredient = (
          <div className={classes.Cheese}>
            <p>cheese</p>
          </div>
        );
        break;
      case "eggplant":
        ingredient = (
          <div className={classes.Eggplant}>
            <p>eggplant</p>
          </div>
        );
        break;
      case "salad":
        ingredient = (
          <div className={classes.Salad}>
            <p>salad</p>
          </div>
        );
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
