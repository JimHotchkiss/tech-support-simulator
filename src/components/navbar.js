class Navbar {
  static renderNavbar() {
    const root = document.getElementById("root")
    // Navbar
    const navbar = document.createElement("div")
    navbar.setAttribute("class", "navbar")
    navbar.setAttribute("id", "navbar")
    // Stryker Logo div
    const logo = document.createElement("div")
    logo.setAttribute("class", "logo")
    logo.setAttribute("id", "logo")
    navbar.appendChild(logo)

    root.appendChild(navbar)
  }
}
