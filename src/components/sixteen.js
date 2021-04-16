class Sixteen {
  static sixteenEventListener() {
    const sixteen = document.getElementById("sixteen")
    sixteen.addEventListener("click", () => {
      Sixteen.clearHtml()
      Sixteen.loadSixteenGui()
    })
  }

  static clearHtml() {
    const guiContainer = document.getElementById("gui-simulator-container")
    if (guiContainer) {
      guiContainer.innerHTML = ""
    }
  }

  static loadSixteenGui() {
    const guiContainer = document.getElementById("gui-simulator-container")
    // Gui
    const gui = document.createElement("div")
    gui.setAttribute("class", "sixteen-gui")
    gui.setAttribute("id", "sixteen-gui")
    guiContainer.appendChild(gui)
  }
}
