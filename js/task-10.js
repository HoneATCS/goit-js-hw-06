function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  createButton: document.querySelector("[data-create]"),
  markupContainer: document.getElementById("boxes"),
  destroyButton: document.querySelector("[data-destroy]"),
};

refs.createButton.addEventListener("click", onCreateButtonClick);

function onCreateButtonClick() {
  createBoxes(5);
}

function createBoxes(amount) {
  let sizes = 30;
  const elements = [];
  for (let index = 0; index < amount; index += 1) {
    const div = document.createElement("div");
    div.style.width = `${sizes}px`;
    div.style.height = `${sizes}px`;
    div.style.backgroundColor = getRandomHexColor();
    sizes += 10;
    elements.push(div);
  }
  refs.markupContainer.append(...elements);
}

refs.destroyButton.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.markupContainer.innerHTML = " ";
}
