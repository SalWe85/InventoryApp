class Inventory {
  
    constructor() {
    this.items = [];
  }

  addItem(item) {
    return this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }

  exists(item) {
    return this.items.includes(item);
  }
}

const form = document.querySelector("#add-item-form");
const newItem = document.querySelector("#new-item");
const tbody = document.querySelector("#tbody");
const total = document.querySelector("#total");
const checkExists = document.querySelector("#check-exists");

const inventory = new Inventory;

const render = () => {
    let html = "";
    inventory.getItems().forEach(item => {
        html += `<tr><td>${item}</td></tr>`
    });
    tbody.innerHTML = html;
    total.textContent = inventory.getCount();
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    inventory.addItem(newItem.value);
    // empty text field
    newItem.value = "";
    // re-render
    render();
});

checkExists.addEventListener("keyup", () => {
    const itemToCheck = checkExists.value;
    const exists = inventory.exists(itemToCheck);
    if (exists) {
        checkExists.classList.add("found");
        checkExists.classList.remove("notfound");
    } else {
        checkExists.classList.remove("found");
        checkExists.classList.add("notfound");
    }
});