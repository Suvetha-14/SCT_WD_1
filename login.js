document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var storedPassword = localStorage.getItem(email);

    if (storedPassword && storedPassword === password) {
        localStorage.setItem("loggedInUser", email);
        document.getElementById("loginMessage").textContent = "✅ Login successful!";
        document.getElementById("loginMessage").style.display = "block";
        setTimeout(() => { window.location.href = "home.html"; }, 1500);
    } else {
        document.getElementById("loginMessage").textContent = "❌ Invalid email or password!";
        document.getElementById("loginMessage").style.display = "block";
    }
});