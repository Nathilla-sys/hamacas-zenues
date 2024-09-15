// scripts.js

let cart = [];
let total = 0;

function addToCart(productName, price) {
    // Añadir producto al carrito
    cart.push({ name: productName, price: price });
    
    // Actualizar el total
    total += price;
    document.getElementById('total-price').textContent = total;

    // Mostrar productos en el carrito
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - ${price}€`;
    cartItems.appendChild(listItem);
}

// Simulación de proceso de compra (integrar PayPal más adelante)
document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Gracias por tu compra. Estamos procesando tu pedido.');
});
