const pizzaPrice = 80;

function checkOrderName(orderName) {
  return (
    orderName == "Vegetarian Pizza" ||
    orderName == "Hawaiian Pizza" ||
    orderName == "Pepperoni Pizza"
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity, pizzaChoice) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return `Great, I'll get started on your ${pizzaChoice}. The price will be: ${totalCost(
      orderQuantity
    )}. The pizza's baking time will take 10 minutes.`;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return `Great, I'll get started on your ${pizzaChoice}. The price will be: ${totalCost(
      orderQuantity
    )}. The pizza's baking time will take 15 minutes.`;
  } else {
    return `Great, I'll get started on your ${pizzaChoice}. The price will be: ${totalCost(
      orderQuantity
    )}. The pizza's baking time will take 20 minutes.`;
  }
}

function placeOrder(event) {
  event.preventDefault();
  const pizzaForm = document.getElementById("pizza-form");
  const resultDisplay = document.getElementById("result");

  const pizzaChoice = pizzaForm.elements["pizza-choice"].value;
  const pizzaNumber = parseInt(pizzaForm.elements["pizza-number"].value);

  if (checkOrderName(pizzaChoice)) {
    resultDisplay.textContent = cookingTime(pizzaNumber, pizzaChoice);
  } else {
    resultDisplay.textContent = "Please select a valid pizza type.";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const pizzaForm = document.getElementById("pizza-form");
  pizzaForm.addEventListener("submit", placeOrder);
});
