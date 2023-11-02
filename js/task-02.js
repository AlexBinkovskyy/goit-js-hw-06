const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

// цей варіант додає елементи послідовно.
const addIngredients = (arr) => {
  arr.map((meal) => {
    let item = document.createElement("li");
    item.textContent = meal;
    item.classList.add("item");
    ingredientsList.append(item);
  });
};


//  другий варіант додає все одним махом, а не поступово в тілі циклу
const addIngredients1 = (arr) => {
  const items = arr.map((meal) => {
    const item = document.createElement("li");
    item.textContent = meal;
    item.classList.add("item");
    console.log(item);
    return item;
  });
  ingredientsList.append(...items);
};

addIngredients(ingredients);
addIngredients1(ingredients);
