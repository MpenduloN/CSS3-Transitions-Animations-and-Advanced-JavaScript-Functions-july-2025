let basket = [];

// Function to add clothing
function addClothing(item, price) {
  basket.push({ item, price });
  updateBasket();
  addToDoll(item);
}

// Function to update basket display
function updateBasket() {
  let basketList = document.getElementById("basket-list");
  basketList.innerHTML = "";
  let total = 0;

  basket.forEach((cloth) => {
    let li = document.createElement("li");
    li.textContent = `R${cloth.item} - R${cloth.price}`;
    basketList.appendChild(li);
    total += cloth.price;
  });

  document.getElementById("total").textContent = total;
}

// Function to add clothing visually to the doll
function addToDoll(item) {
  let layer = document.createElement("div");
  layer.classList.add(item.toLowerCase());
  document.getElementById("clothes-layer").appendChild(layer);
}

// Clear all clothes and basket
function clearAll() {
  basket = [];
  document.getElementById("basket-list").innerHTML = "";
  document.getElementById("total").textContent = 0;
  document.getElementById("clothes-layer").innerHTML = "";
}
