// assign starting price
let cost = 10;
let total = document.querySelector("#cost");
total.innerHTML = cost;

const toppingsArray = [
  {
    name: "Pepperoni",
    cost: 2,
  },
  {
    name: "Sausage",
    cost: 2,
  },
  {
    name: "Olives",
    cost: 1,
  },
  {
    name: "Onions",
    cost: 1,
  },
  {
    name: "Peppers",
    cost: 1,
  },
  {
    name: "Spinach",
    cost: 1,
  },
  {
    name: "Tomatoes",
    cost: 1,
  },
  {
    name: "Mushrooms",
    cost: 1,
  },
  {
    name: "Pineapple",
    cost: 5,
    alert: "Pineapple on pizza? Please re-evaluate your life choices",
  },
];

// add event listeners for each topping
for (const topping of toppingsArray) {
  const currentElement = document.getElementById(`choose${topping.name}`);
  currentElement.addEventListener("click", () => addIngredient(topping));
}

// generic handler function topping button to toggle images and adust price
function addIngredient(topping) {
  const formattedToppingName = topping.name.toLowerCase();
  const toppingElementToToggle = document.querySelector(
    `#${formattedToppingName}`
  );
  toppingElementToToggle.classList.toggle("hidden");
  if (topping.alert && !toppingElementToToggle.classList.contains("hidden"))
    alert(topping.alert);
  let timesClickedTopping = 0;
  timesClickedTopping = timesClickedTopping + 1;
  if (timesClickedTopping % 2 == 1) {
    cost = cost + topping.cost;
  } else {
    cost = cost - topping.cost;
  }
  total.innerHTML = cost;
}
