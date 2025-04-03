// Toggle the heart on favorite button
function toggleFavorite(button) {
    button.classList.toggle('shake');
    setTimeout(() => {
        button.classList.remove('shake');
    }, 500);
}

// Add to Choco Cart
function addToChocoCart(button) {
    const status = button.nextElementSibling;
    status.style.display = 'inline-block';
    button.textContent = "Added to Choco Cart";
    setTimeout(() => {
        status.style.display = 'none';
        button.textContent = "Choco Cart";
    }, 2000);
}

// Redirect to Order Page
function redirectToOrderPage(productName, price, rating) {
    window.location.href = `order.html?product=${encodeURIComponent(productName)}&price=${encodeURIComponent(price)}&rating=${encodeURIComponent(rating)}`;
}