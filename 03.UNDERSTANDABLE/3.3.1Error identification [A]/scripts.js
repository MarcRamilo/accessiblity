document.getElementById("myForm").addEventListener("submit", function(event) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "") {
      document.getElementById("username").classList.add("error");
      document.getElementById("username-error").style.display = "block";
      event.preventDefault();
    } else {
      document.getElementById("username").classList.remove("error");
      document.getElementById("username-error").style.display = "none";
    }

    if (password === "") {
      document.getElementById("password").classList.add("error");
      document.getElementById("password-error").style.display = "block";
      event.preventDefault();
    } else {
      document.getElementById("password").classList.remove("error");
      document.getElementById("password-error").style.display = "none";
    }
  });