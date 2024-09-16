function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = (amount) => {
        
        let size = 30;
        const ratio = 10;
        
        const newBoxes = Array.from({ length: amount }, (_, i) => {
        const currentSize = `${size + (i + boxes.children.length) * ratio}px`;  
          
            const box = document.createElement("div");
            box.style.width = currentSize;
            box.style.height = currentSize;
            box.style.backgroundColor = getRandomHexColor();

            return box;
        });

        const fragment = document.createDocumentFragment();
        fragment.append(...newBoxes);

        boxes.prepend(fragment);
};
    
 function destroyBoxes() {
            boxes.innerHTML = "";
        }

        
create.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);

    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
      input.value = "";
    } else {
        
    }
});

destroy.addEventListener('click', () => {
  destroyBoxes();
});