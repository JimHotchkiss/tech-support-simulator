class Sidebar {
  static renderSidebar() {
    const root = document.getElementById("root")
    // Main-body container
    const mainbody = document.createElement("div")
    mainbody.setAttribute("class", "mainbody")
    mainbody.setAttribute("id", "mainbody")
    // Sidebar
    const sidebar = document.createElement("div")
    sidebar.setAttribute("class", "sidebar")
    sidebar.setAttribute("id", "sidebar")
    // Navigation
    const navigation = document.createElement("div")
    navigation.setAttribute("class", "navigation")
    navigation.setAttribute("id", "navigation")
    // guiSimulatorContainer
    const guiSimulatorContainer = document.createElement("div")
    guiSimulatorContainer.setAttribute("class", "gui-simulator-container")
    guiSimulatorContainer.setAttribute("id", "gui-simulator-container")

    // 1688
    const sixteen = document.createElement("div")
    sixteen.setAttribute("class", "sixteen")
    sixteen.setAttribute("id", "sixteen")
    sixteen.innerText = "1688"
    navigation.appendChild(sixteen)

    mainbody.appendChild(sidebar)
    mainbody.appendChild(navigation)
    mainbody.appendChild(guiSimulatorContainer)
    root.appendChild(mainbody)

    // HUB
    const hub = document.createElement("div")
    hub.setAttribute("class", "hub")
    hub.setAttribute("id", "hub-btn")
    hub.onclick = function () {
      Sidebar.clearGuiSimulatorContainer()
      Hub.loadHubLandingPage()
    }
    hub.innerText = "HUB"
    navigation.appendChild(hub)

    mainbody.appendChild(sidebar)
    mainbody.appendChild(navigation)
    mainbody.appendChild(guiSimulatorContainer)
    root.appendChild(mainbody)

    // Clear Btn -
    const clearGui = document.createElement("div")
    clearGui.setAttribute("class", "clear-gui")
    clearGui.setAttribute("id", "clear-gui")
    clearGui.innerText = "Clear Gui"
    navigation.appendChild(clearGui)

    Sidebar.clearGuiEventListener()
    Sixteen.sixteenEventListener()
  }

  static clearGuiEventListener() {
    const clearGui = document.getElementById("clear-gui")
    clearGui.addEventListener("click", () => {
      Sidebar.clearGuiSimulatorContainer()
    })
  }

  static clearGuiSimulatorContainer() {
    const guiSimulatorContainer = document.getElementById(
      "gui-simulator-container"
    )
    guiSimulatorContainer.innerHTML = ""
  }
}
