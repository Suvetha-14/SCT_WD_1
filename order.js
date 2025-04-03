const urlParams = new URLSearchParams(window.location.search);
document.getElementById('product').value = urlParams.get('product');
document.getElementById('price').value = urlParams.get('price');

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('orderNotification').style.display = 'block';
    setTimeout(() => {
        window.location.href = 'Menu.html';
    }, 2000);
});