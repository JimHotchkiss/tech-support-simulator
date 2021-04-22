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
    Sixteen.loadDefogContainer()
    Sixteen.loadAutoLightContainer()
  }

  static loadAutoLightContainer() {
    const autolightDefogContainer = document.getElementById(
      "autolight-defog-container"
    )
    const autolightContainer = document.createElement("div")
    autolightContainer.setAttribute("class", "defog-autolight-containers")
    autolightContainer.setAttribute("id", "autolight-container")
    autolightDefogContainer.appendChild(autolightContainer)
    Sixteen.autolightCircleDiv()
    Sixteen.autolightTextDiv()
  }

  static autolightTextDiv() {
    const autolightContainer = document.getElementById("autolight-container")
    const autolightText = document.createElement("div")
    autolightText.setAttribute("class", "autolight-text")
    autolightText.setAttribute("id", "autolight-text")
    autolightText.innerText = "Auto Light"
    autolightContainer.appendChild(autolightText)
  }

  static autolightCircleDiv() {
    const autolightContainer = document.getElementById("autolight-container")
    const autolightCircleDiv = document.createElement("div")
    autolightCircleDiv.setAttribute("class", "autolight-circle-div")
    autolightCircleDiv.setAttribute("id", "autlight-circle-div")
    autolightContainer.appendChild(autolightCircleDiv)
    Sixteen.autolightImageDiv()
  }

  static autolightImageDiv() {
    const circleDiv = document.getElementById("autlight-circle-div")
    const autolightImgDiv = document.createElement("div")
    autolightImgDiv.setAttribute("class", "autolight-img-div")
    autolightImgDiv.setAttribute("id", "autolight-img-div")
    circleDiv.appendChild(autolightImgDiv)
  }

  static loadDefogContainer() {
    const autolightDefogContainer = document.getElementById(
      "autolight-defog-container"
    )
    const defogContainer = document.createElement("div")
    defogContainer.setAttribute("class", "defog-autolight-containers")
    defogContainer.setAttribute("id", "defog-container")
    autolightDefogContainer.appendChild(defogContainer)
  }

  static loadCcuFunctionsContainer() {
    const sixteenHomeScreenContainer = document.getElementById(
      "sixteen-home-container"
    )
    const ccuFunctionsContainer = document.createElement("div")
    ccuFunctionsContainer.setAttribute("class", "home-containers")
    ccuFunctionsContainer.setAttribute("id", "ccu-functions-container")
    sixteenHomeScreenContainer.appendChild(ccuFunctionsContainer)
    // Load CCU functionality
    Sixteen.loadCcuWhiteBalanceBtn()
    Sixteen.loadCcuImageBtn()
    Sixteen.loadCcuVideoBtn()
  }

  static loadCcuVideoBtn() {
    const ccuFunctionsContainer = document.getElementById(
      "ccu-functions-container"
    )
    const videoBtnContainer = document.createElement("div")
    videoBtnContainer.setAttribute("class", "function-btn-container")
    videoBtnContainer.setAttribute("id", "video-btn-container")
    ccuFunctionsContainer.appendChild(videoBtnContainer)
    Sixteen.loadCcuVidoeBtnImgDiv()
  }

  static loadCcuVidoeBtnImgDiv() {
    const videoBtnContainer = document.getElementById("video-btn-container")
    const videoBtnImgDiv = document.createElement("div")
    videoBtnImgDiv.setAttribute("class", "img-div")
    videoBtnImgDiv.setAttribute("id", "ccu-video-img-div")
    videoBtnContainer.appendChild(videoBtnImgDiv)
  }

  static loadCcuImageBtn() {
    const ccuFunctionsContainer = document.getElementById(
      "ccu-functions-container"
    )
    const imageBtnContainer = document.createElement("div")
    imageBtnContainer.setAttribute("class", "function-btn-container")
    imageBtnContainer.setAttribute("id", "img-container")
    ccuFunctionsContainer.appendChild(imageBtnContainer)
    Sixteen.loadCcuImageBtnDiv()
  }

  static loadCcuImageBtnDiv() {
    const imgContainer = document.getElementById("img-container")
    const imgDiv = document.createElement("div")
    imgDiv.setAttribute("class", "img-div")
    imgDiv.setAttribute("id", "ccu-camera-img-div")
    imgContainer.appendChild(imgDiv)
  }

  static loadCcuWhiteBalanceBtn() {
    const ccuFunctionsContainer = document.getElementById(
      "ccu-functions-container"
    )
    const wbContainer = document.createElement("div")
    wbContainer.setAttribute("class", "function-btn-container")
    wbContainer.setAttribute("id", "wb-container")
    ccuFunctionsContainer.appendChild(wbContainer)
    Sixteen.wbTextDiv()
  }

  static wbTextDiv() {
    const wbContainer = document.getElementById("wb-container")
    const wbText = document.createElement("div")
    wbText.setAttribute("class", "wb-text")
    wbText.innerText = "WB"
    wbContainer.appendChild(wbText)
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
      Sixteen.plusSlides(-1)
    }
    leftArrowContainer.appendChild(leftArrowDiv)
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
    specialties.map((specialty, i) => {
      const specialtyDiv = document.createElement("div")
      specialtyDiv.setAttribute("class", "specialty-name")
      specialtyDiv.setAttribute("data-id", i)
      Sixteen.assignSpecialtyDisplay(specialty, specialtyDiv)
      specialtyDiv.setAttribute("id", `${specialty}-specialty`)
      specialtyDiv.innerText = specialty
      specialtyWindowDiv.appendChild(specialtyDiv)
    })
    Sixteen.loadCarouselDotsContainer()
  }

  static assignSpecialtyDisplay(specialty, specialtyDiv) {
    if (specialty === "STANDARD") {
      specialtyDiv.classList.add("show")
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

    Sixteen.loadDefaultSpecialtyDot()
  }

  static loadDefaultSpecialtyDot() {
    // Selected Dot
    const specialtyDots = document.getElementsByClassName("dot-div")
    specialtyDots[0].classList.add("selected")
  }

  // Need to define a variable to hold the index

  static plusSlides(n) {
    Sixteen.showSlides(n)
  }

  static showSlides(n) {
    const specailtyNameDivs = document.getElementsByClassName("specialty-name")
    const divsArray = Array.from(specailtyNameDivs)
    let currentIndex
    divsArray.map((div, i) => {
      if (Object.values(div.classList).includes("show")) {
        currentIndex = i
        div.classList.remove("show")
      }
    })
    Sixteen.showNextSpecialty(n, currentIndex)
  }

  static showNextSpecialty(n, currentIndex) {
    let nextSpecialty
    const specailtyNameDivs = document.getElementsByClassName("specialty-name")
    const divsArray = Array.from(specailtyNameDivs)
    if (n + currentIndex >= 7) {
      nextSpecialty = 0
    } else if (n + currentIndex < 0) {
      nextSpecialty = 6
    } else {
      nextSpecialty = n + currentIndex
    }
    divsArray[nextSpecialty].classList.add("show")
    Sixteen.clearSpecialtyDots(nextSpecialty)
  }

  static clearSpecialtyDots(nextSpecialty) {
    const specialtyDots = document.getElementsByClassName("dot-div")
    Array.from(specialtyDots).map((dot) => {
      if (Object.values(dot.classList).includes("selected")) {
        dot.classList.remove("selected")
      }
    })

    Sixteen.selectedSpecialtyDot(nextSpecialty)
  }

  static selectedSpecialtyDot(nextSpecialty) {
    const specialtyDots = document.getElementsByClassName("dot-div")
    Array.from(specialtyDots)[nextSpecialty].classList.add("selected")
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
      Sixteen.plusSlides(1)
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
    home.onclick = function () {
      Sixteen.clearHtml()
      Sixteen.loadSixteenGui()
    }
    navigation.appendChild(home)
    // AIM
    const aim = document.createElement("div")
    aim.setAttribute("class", "navigation-btns")
    aim.setAttribute("id", "sixteen-navigation-aim")
    aim.onclick = function () {
      const sixteenHomeContainer = document.getElementsByClassName(
        "sixteen-home-container"
      )
      for (let item of sixteenHomeContainer) {
        item.innerHTML = ""
      }
    }
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
    Sixteen.setDefaultSelectionBtn()
  }

  static setDefaultSelectionBtn() {
    const sixteenNavigationHome = document.getElementById(
      "sixteen-navigation-home"
    )

    if (!sixteenNavigationHome.getAttribute("class").includes("active")) {
      const homeIconDiv = document.getElementsByClassName("home-icon-div")
      homeIconDiv[0].classList.add("active")
      console.log(homeIconDiv[0], sixteenNavigationHome)
      sixteenNavigationHome.classList.add("active")
    }
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
