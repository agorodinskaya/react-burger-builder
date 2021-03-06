import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES = {
  salad: 0.8,
  beetroot: 0.9,
  cheese: 1.3,
  eggplant: 0.8,
  cucumber: 0.9,
  falafel: 1,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      beetroot: 0,
      cheese: 0,
      eggplant: 0,
      cucumber: 0,
      falafel: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };
  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients).map(ingkey => {
      return ingredients[ingkey]
    })
    .reduce((sum, el) => {
      return sum + el;
    },0)
    this.setState({purchasable: sum >0})
  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  purchaseHandler = () => {
    this.setState({purchasing : true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for(let keys in disabledInfo){
      disabledInfo[keys] = disabledInfo[keys] <= 0
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}><OrderSummary ingredients = {this.state.ingredients}/></Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          moreIngredient={this.addIngredientHandler}
          lessIngredient={this.removeIngredientHandler}
          disabled = {disabledInfo}
          price = {this.state.totalPrice}
          purchasable= {this.state.purchasable}
          ordered = {this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
