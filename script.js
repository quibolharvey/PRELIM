const cartItems = [];
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

document.getElementById('add-to-cart').addEventListener('click', () => {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = parseFloat(document.getElementById('item-price').value);
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);

    if (itemName && itemPrice > 0 && itemQuantity > 0) {
        addItemToCart(itemName, itemPrice, itemQuantity);
        updateCart();
    } else {
        alert('Please enter valid item details');
    }
});

function addItemToCart(name, price, quantity) {
    const existingItemIndex = cartItems.findIndex(item => item.name === name);
    if (existingItemIndex >= 0) {
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        cartItems.push({ name, price, quantity });
    }
}

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        total += item.price * item.quantity;

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${item.name} - P${item.price.toFixed(2)} x ${item.quantity}
            <div class="cart-item-buttons">
            <input class="nigga" type="checkbox" name="" id="">
                <button onclick="editItem(${index})">Edit</button>
                <button onclick="deleteItem(${index})">Delete</button>
            </div>
        `;

        cartItemsList.appendChild(listItem);
    });

    totalPriceElement.textContent = total.toFixed(2);
}

function deleteItem(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function editItem(index) {
    const item = cartItems[index];
   
}