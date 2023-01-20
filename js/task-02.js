const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




function createItemsMarkup(ingredients) {
  return ingredients.map((ingredient)=>{
    const li = document.createElement("li")
    li.textContent = ingredient;
    li.classList.add("item");
    return li
  })
}
const ingredientsListRef = document.getElementById("ingredients");
ingredientsListRef.append(...createItemsMarkup(ingredients))
console.log(createItemsMarkup(ingredients));

