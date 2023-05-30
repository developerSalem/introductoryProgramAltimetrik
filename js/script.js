function login() {
  let user = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  user === "admin" && pass === "admin"
    ? (window.location = "principalPage.html")
    : Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Wrong Email or Password",
      });
}

function showPassword() {
  let pass = document.getElementById("password");
  let icon = document.getElementById("icon-password");

  if (pass.type === "password") {
    pass.setAttribute("type", "text");
    icon.setAttribute("name", "eye-off-outline");
  } else {
    pass.setAttribute("type", "password");
    icon.setAttribute("name", "eye-outline");
  }
}
