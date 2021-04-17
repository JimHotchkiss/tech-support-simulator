class Sixteen {
  static guiSimulatorContainer() {
    return document.getElementById("gui-simulator-container")
  }

  static sixteenEventListener() {
    const sixteen = document.getElementById("sixteen")
    sixteen.addEventListener("click", () => {
      Sixteen.clearHtml()
      Sixteen.loadSixteenGui()
    })
  }

  static clearHtml() {
    if (Sixteen.guiSimulatorContainer()) {
      Sixteen.guiSimulatorContainer().innerHTML = ""
    }
  }

  static loadSixteenGui() {
    // Gui
    const gui = document.createElement("div")
    gui.setAttribute("class", "sixteen-gui")
    gui.setAttribute("id", "sixteen-gui")
    Sixteen.guiSimulatorContainer().appendChild(gui)
    Sixteen.loadSixteenNavigation()
  }

  static loadSixteenNavigation() {
    const sixteenGui = document.getElementById("sixteen-gui")
    // Navigation Div
    const navigation = document.createElement("div")
    navigation.setAttribute("class", "sixteen-navigation")
    navigation.setAttribute("id", "sixteen-navigation")
    sixteenGui.appendChild(navigation)

    Sixteen.loadNavigationBtns()
  }

  static loadNavigationBtns() {
    const navigation = document.getElementById("sixteen-navigation")
    // Home
    const home = document.createElement("div")
    home.setAttribute("class", "navigation-btns")
    home.setAttribute("id", "sixteen-navigation-home")
    navigation.appendChild(home)
    // AIM
    const aim = document.createElement("div")
    aim.setAttribute("class", "navigation-btns")
    aim.setAttribute("id", "sixteen-navigation-aim")
    navigation.appendChild(aim)
    // Settings
    const settings = document.createElement("div")
    settings.setAttribute("class", "navigation-btns")
    settings.setAttribute("id", "sixteen-navigation-settings")
    navigation.appendChild(settings)
    Sixteen.insertHomeIconDiv()
    Sixteen.insertAimIconDiv()
    Sixteen.insertSettingsIconDiv()
    Sixteen.navigationBtnEventListener()
  }

  static insertSettingsIconDiv() {
    const settingsDiv = document.getElementById("sixteen-navigation-settings")
    const settingsIconDiv = document.createElement("div")
    settingsIconDiv.setAttribute("class", "settings-icon-div")
    settingsIconDiv.setAttribute("id", "sixteen-settings-icon")
    settingsDiv.appendChild(settingsIconDiv)
  }

  static insertAimIconDiv() {
    const aimDiv = document.getElementById("sixteen-navigation-aim")
    const aimIconDiv = document.createElement("div")
    aimIconDiv.setAttribute("class", "aim-icon-div")
    aimIconDiv.setAttribute("id", "sixteen-aim-icon")
    aimIconDiv.innerText = "AIM"
    aimDiv.appendChild(aimIconDiv)
  }

  static insertHomeIconDiv() {
    const homeDiv = document.getElementById("sixteen-navigation-home")
    const homeIconDiv = document.createElement("div")
    homeIconDiv.setAttribute("class", "home-icon-div")
    homeIconDiv.setAttribute("id", "sixteen-home-icon")
    homeDiv.appendChild(homeIconDiv)
  }

  static navigationBtnEventListener() {
    const btnDivs = document.getElementsByClassName("navigation-btns")
    for (let item of btnDivs) {
      item.addEventListener("click", () => {
        Sixteen.resetBtns()
        Sixteen.activateBtn(item)
      })
    }
  }

  static activateBtn(item) {
    item.children.item(0).classList.toggle("active")
    item.classList.toggle("active")
  }

  static resetBtns() {
    const btnDivs = document.getElementsByClassName("navigation-btns")
    for (let item of btnDivs) {
      item.children.item(0).classList.remove("active")
      item.classList.remove("active")
    }
  }
}
