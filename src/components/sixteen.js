class Sixteen {
  static guiSimulatorContainer() {
    return document.getElementById("gui-simulator-container")
  }

  static specialties() {
    return [
      "STANDARD",
      "ARTHROSCOPY",
      "CYSTOSCOPY",
      "HYSTEROSCOPY",
      "LAPAROSCOPY",
      "LASER",
      "MICROSCOPE",
    ]
  }

  static dots() {
    return [1, 2, 3, 4, 5, 6, 7]
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
    Sixteen.loadSixteenHomescreen()
  }

  static loadSixteenHomescreen() {
    const sixteenGui = document.getElementById("sixteen-gui")
    const sixteenHomeScreenContainer = document.createElement("div")
    sixteenHomeScreenContainer.setAttribute("class", "sixteen-home-container")
    sixteenHomeScreenContainer.setAttribute("id", "sixteen-home-container")
    sixteenGui.appendChild(sixteenHomeScreenContainer)
    Sixteen.loadSpecialtyContainer()
    Sixteen.loadCcuFunctionsContainer()
    Sixteen.loadAutoLightDefogContainer()
  }

  static loadAutoLightDefogContainer() {
    const sixteenHomeScreenContainer = document.getElementById(
      "sixteen-home-container"
    )
    const autoLightDefogContainer = document.createElement("div")
    autoLightDefogContainer.setAttribute("class", "home-containers")
    autoLightDefogContainer.setAttribute("id", "autolight-defog-container")
    sixteenHomeScreenContainer.appendChild(autoLightDefogContainer)
  }

  static loadCcuFunctionsContainer() {
    const sixteenHomeScreenContainer = document.getElementById(
      "sixteen-home-container"
    )
    const ccuFunctionsContainer = document.createElement("div")
    ccuFunctionsContainer.setAttribute("class", "home-containers")
    ccuFunctionsContainer.setAttribute("id", "ccu-functions-container")
    sixteenHomeScreenContainer.appendChild(ccuFunctionsContainer)
  }
  static loadSpecialtyContainer() {
    const sixteenHomeScreenContainer = document.getElementById(
      "sixteen-home-container"
    )
    const specialtyContainer = document.createElement("div")
    specialtyContainer.setAttribute("class", "home-containers")
    specialtyContainer.setAttribute("id", "specialty-container")
    sixteenHomeScreenContainer.appendChild(specialtyContainer)
    Sixteen.loadCarouselHTML()
  }

  static loadCarouselHTML() {
    Sixteen.loadSpecialtyWindowContainer()
    Sixteen.loadLeftArrow()
    Sixteen.loadSpecialtyWindow()
    Sixteen.loadRightArrow()
  }

  static loadSpecialtyWindowContainer() {
    const specialtyContainer = document.getElementById("specialty-container")
    const specialtyWindowContainer = document.createElement("div")
    specialtyWindowContainer.setAttribute("class", "specialty-window-container")
    specialtyWindowContainer.setAttribute("id", "specialty-window-container")

    const arrowSpecialtyContainer = document.createElement("div")
    arrowSpecialtyContainer.setAttribute("class", "arrow-specialty-container")
    arrowSpecialtyContainer.setAttribute("id", "arrow-specialty-container")

    specialtyWindowContainer.appendChild(arrowSpecialtyContainer)
    specialtyContainer.appendChild(specialtyWindowContainer)
  }

  static loadLeftArrow() {
    const arrowSpecialtyContainer = document.getElementById(
      "arrow-specialty-container"
    )
    const leftArrowDiv = document.createElement("div")
    leftArrowDiv.setAttribute("class", "arrow-container")
    leftArrowDiv.setAttribute("id", "left-arrow-container")
    arrowSpecialtyContainer.appendChild(leftArrowDiv)
    Sixteen.insertLeftArrowDiv()
  }

  static insertLeftArrowDiv() {
    const leftArrowContainer = document.getElementById("left-arrow-container")
    const leftArrowDiv = document.createElement("div")
    leftArrowDiv.setAttribute("class", "arrow-div")
    leftArrowDiv.setAttribute("id", "left-arrow-div")
    leftArrowDiv.onclick = function () {
      Sixteen.plusSlides(1)
    }
    leftArrowContainer.appendChild(leftArrowDiv)
  }

  static insertRightArrowDiv() {
    const rightArrowContainer = document.getElementById("right-arrow-container")
    const rightArrowDiv = document.createElement("div")
    rightArrowDiv.setAttribute("class", "arrow-div")
    rightArrowDiv.setAttribute("id", "right-arrow-div")
    rightArrowDiv.onclick = function () {
      Sixteen.plusSlides(-1)
    }
    rightArrowContainer.appendChild(rightArrowDiv)
  }

  static loadSpecialtyWindow() {
    const arrowSpecialtyContainer = document.getElementById(
      "arrow-specialty-container"
    )
    const specialtyWindowDiv = document.createElement("div")
    specialtyWindowDiv.setAttribute("class", "specialty-window-div")
    specialtyWindowDiv.setAttribute("id", "specialty-window-div")
    arrowSpecialtyContainer.appendChild(specialtyWindowDiv)
    Sixteen.loadSpecialtyList()
  }

  static loadSpecialtyList() {
    const specialtyWindowDiv = document.getElementById("specialty-window-div")
    const specialties = Sixteen.specialties()
    specialties.map((specialty) => {
      const specialtyDiv = document.createElement("div")
      specialtyDiv.setAttribute("class", "specialty-name")
      Sixteen.assignSpecialtyDisplay(specialty, specialtyDiv)
      specialtyDiv.setAttribute("id", `${specialty}-specialty`)
      specialtyDiv.innerText = specialty
      specialtyWindowDiv.appendChild(specialtyDiv)
    })
    Sixteen.loadCarouselDotsContainer()
  }

  static assignSpecialtyDisplay(specialty, specialtyDiv) {
    if (specialty === "STANDARD") {
      specialtyDiv.style = "display: block"
    } else {
      specialtyDiv.style = "display: none"
    }
  }

  static loadCarouselDotsContainer() {
    const specialtyWindowContainer = document.getElementById(
      "specialty-window-container"
    )
    const dotsContainer = document.createElement("div")
    dotsContainer.setAttribute("class", "dots-container")
    dotsContainer.setAttribute("id", "dots-container")
    specialtyWindowContainer.appendChild(dotsContainer)
    Sixteen.loadCarouselDotsDivs()
  }

  static loadCarouselDotsDivs() {
    const dots = Sixteen.dots()
    const dotsContainer = document.getElementById("dots-container")
    dots.map((dot) => {
      const dotDiv = document.createElement("div")
      dotDiv.setAttribute("class", "dot-div")
      dotDiv.setAttribute("id", `dot-div-${dot}`)
      dotDiv.onclick = function () {
        alert("span")
      }
      dotsContainer.appendChild(dotDiv)
    })
  }

  // Need to define a variable to hold the index

  static plusSlides(n) {
    Sixteen.showSlides(n)
  }

  static showSlides(n) {
    const specailtyNameDivs = document.getElementsByClassName("specialty-name")
    for (let div of specailtyNameDivs) {
      if (div.style.display === "block") {
        const nextElement = div.nextSibling
        div.style.display = "none"
        if (nextElement != null) {
          console.log("sup")
          console.log(nextElement.style.display)
          nextElement.style.display = "block"
        }
      }
    }
  }

  // End Carousel Functionality
  d
  static loadRightArrow() {
    const arrowSpecialtyContainer = document.getElementById(
      "arrow-specialty-container"
    )
    const rightArrowDiv = document.createElement("div")
    rightArrowDiv.setAttribute("class", "arrow-container")
    rightArrowDiv.setAttribute("id", "right-arrow-container")
    arrowSpecialtyContainer.appendChild(rightArrowDiv)
    Sixteen.insertRightArrowDiv()
  }

  static insertRightArrowDiv() {
    const rightArrowContainer = document.getElementById("right-arrow-container")
    const rightArrowDiv = document.createElement("div")
    rightArrowDiv.setAttribute("class", "arrow-div")
    rightArrowDiv.setAttribute("id", "right-arrow-div")
    rightArrowDiv.onclick = function () {
      Sixteen.plusSlides(-1)
    }
    rightArrowContainer.appendChild(rightArrowDiv)
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
