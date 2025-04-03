document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (localStorage.getItem(email)) {
        document.getElementById("registerMessage").textContent = "❌ Email already registered!";
        document.getElementById("registerMessage").style.display = "block";
    } else {
        localStorage.setItem(email, password);
        document.getElementById("registerMessage").textContent = "✅ Registration successful! Redirecting...";
        document.getElementById("registerMessage").style.display = "block";
        setTimeout(() => { window.location.href = "login.html"; }, 1500);
    }
});