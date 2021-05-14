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

  static settings() {
    return [{ name: "Brightness" }, { name: "Zoom" }, { name: "Enhancement" }]
  }

  static GainBrightness() {
    return [{ id: "gain" }, { id: "brightness" }]
  }

  static advancedSettings() {
    return [
      { name: "Button Config" },
      { name: "Options" },
      { name: "Advanced Camera" },
      { name: "System" },
      { name: "Language" },
    ]
  }

  static modalities() {
    return ["Overlay", "Contrast", "ENV"]
  }

  static modalityDots() {
    return [1, 2, 3]
  }

  static dots() {
    return [1, 2, 3, 4, 5, 6, 7]
  }

  static gain() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }

  static brightness() {
    return [1, 2, 3, 4, 5, 6, 7, 8]
  }

  static zoom() {
    return [1, 2, 3, 4, 5, 6, 7]
  }

  static enhancement() {
    return [1, 2, 3, 4, 5, 6, 7, 8]
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
    Sixteen.loadSettingsTextModal()
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

  // <!-- Modal-->
  // <div class="modal" id="modal">
  //   <div class="modal-header">
  //     <div id="modal-title" class="modal-title"></div>
  //     <button id="modal-close" class="close-modal">&times;</button>
  //   </div>
  //   <div id="modal-body" class="modal-body">
  //     <!-- <h3 id="modal-title-text"></h3>
  //     <h3 id="modal-pn-text" class="modal-pn-text"></h3> -->
  //     <div id="modal-body-description" class="modal-body-description">
  //       <!-- <p id="modal-body-description-text"></p> -->
  //     </div>
  //   </div>
  // </div>
  // <div id="modal-overlay"></div>
  // <!-- End Modal -->

  static loadSettingsTextModal() {
    const sixteenGui = document.getElementById("sixteen-gui")
    const modal = document.createElement("div")
    modal.setAttribute("class", "modal")
    modal.setAttribute("id", "modal")
    // Settings Btns Div
    const settingsBtnsDiv = document.createElement("div")
    settingsBtnsDiv.setAttribute("class", "settings-btns-div")

    // Settings Btn
    const modalSettingsBtn = document.createElement("div")
    modalSettingsBtn.setAttribute("class", "settings-btn")
    modalSettingsBtn.setAttribute("id", "settings-btn")
    modalSettingsBtn.innerText = "Settings"
    modalSettingsBtn.onclick = function () {
      Sixteen.textModalClose()
      Sixteen.loadSettingHomeContainer()
    }

    settingsBtnsDiv.appendChild(modalSettingsBtn)
    // Advance Settings Btn
    const modalAdvanceSettingsBtn = document.createElement("div")
    modalAdvanceSettingsBtn.setAttribute("class", "settings-btn")
    modalAdvanceSettingsBtn.setAttribute("id", "advance-settings-btn")
    modalAdvanceSettingsBtn.innerText = "Advance Settings"
    modalAdvanceSettingsBtn.onclick = function () {
      Sixteen.textModalClose()
      Sixteen.loadAdvanceSettingsHomeContainer()
    }
    settingsBtnsDiv.appendChild(modalAdvanceSettingsBtn)
    modal.appendChild(settingsBtnsDiv)

    sixteenGui.appendChild(modal)
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
    if (!autolightDefogContainer) {
      const spyAutoContainer = document.getElementById("spy-auto-container")
      const autolightContainer = document.createElement("div")
      autolightContainer.setAttribute("class", "spy-defog-autolight-containers")
      autolightContainer.setAttribute("id", "autolight-container")
      spyAutoContainer.appendChild(autolightContainer)
      Sixteen.autolightCircleDiv()
      Sixteen.autolightTextDiv()
    } else {
      const autolightContainer = document.createElement("div")
      autolightContainer.setAttribute("class", "defog-autolight-containers")
      autolightContainer.setAttribute("id", "autolight-container")
      autolightDefogContainer.appendChild(autolightContainer)
      Sixteen.autolightCircleDiv()
      Sixteen.autolightTextDiv()
    }
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
    autolightCircleDiv.setAttribute("id", "autolight-circle-div")
    autolightContainer.appendChild(autolightCircleDiv)
    Sixteen.autolightImageDiv()
  }

  static autolightToggle() {
    const spyToggleContainer = document.getElementById("spy-toggle-container")
    const spyToggleOff = document.getElementById("spy-toggle-off")
    if (!spyToggleContainer) {
      Sixteen.autolightToggleImgDiv()
      Sixteen.autolightToggleCircleDiv()
    } else if (!spyToggleOff.getAttribute("class").includes("spy-on")) {
      Sixteen.autolightToggleImgDiv()
      Sixteen.autolightToggleCircleDiv()
    }
  }

  static autolightToggleImgDiv() {
    const autolightImgDiv = document.getElementById("autolight-img-div")
    const spyAutolightImgDiv = document.getElementById("spy-autolight-img-div")
    const settingsAutlightImgDiv = document.getElementById(
      "settings-autolight-circle"
    )

    if (autolightImgDiv) {
      autolightImgDiv.classList.toggle("autolight-active")
    } else if (spyAutolightImgDiv) {
      spyAutolightImgDiv.classList.toggle("autolight-active")
    } else {
      settingsAutlightImgDiv.classList.toggle("autolight-active")
    }
  }

  static autolightToggleCircleDiv() {
    const autolightCircleDiv = document.getElementById("autolight-circle-div")
    if (autolightCircleDiv) {
      autolightCircleDiv.classList.toggle("autolight-active")
    }
  }

  static autolightImageDiv() {
    const autolightDefogContainer = document.getElementById(
      "autolight-defog-container"
    )
    const circleDiv = document.getElementById("autolight-circle-div")
    if (!autolightDefogContainer) {
      const autolightImgDiv = document.createElement("div")
      autolightImgDiv.setAttribute("class", "spy-autolight-img-div")
      autolightImgDiv.setAttribute("id", "spy-autolight-img-div")
      circleDiv.appendChild(autolightImgDiv)
      Sixteen.autolightToggleEventListener()
    } else if (circleDiv) {
      const autolightImgDiv = document.createElement("div")
      autolightImgDiv.setAttribute("class", "autolight-img-div")
      autolightImgDiv.setAttribute("id", "autolight-img-div")
      circleDiv.appendChild(autolightImgDiv)
      Sixteen.autolightToggleEventListener()
    }
  }

  static autolightToggleEventListener() {
    const circleDiv = document.getElementById("autolight-circle-div")
    const settingsCircleDiv = document.getElementById(
      "settings-autolight-circle"
    )
    if (!circleDiv) {
      settingsCircleDiv.addEventListener("click", () => {
        Sixteen.settingsAutolightToggle()
      })
    } else {
      circleDiv.addEventListener("click", () => {
        Sixteen.autolightToggle()
      })
    }
  }

  static settingsAutolightToggle() {
    const settingsAutolightCircle = document.getElementById(
      "settings-autolight-circle"
    )
    settingsAutolightCircle.classList.toggle("autolight-active")
    Sixteen.settingsAutolightImgToggle()
  }

  static settingsAutolightImgToggle() {
    const settingsAutolightImg = document.getElementById(
      "settings-autolight-image"
    )
    settingsAutolightImg.classList.toggle("autolight-active")
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
      dotsContainer.appendChild(dotDiv)
    })

    Sixteen.loadDefaultSpecialtyDot()
  }

  static loadDefaultSpecialtyDot() {
    // Selected Dot
    const specialtyDots = document.getElementsByClassName("dot-div")
    specialtyDots[0].classList.add("selected")
  }
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
      Sixteen.resetBtns()
      Sixteen.activateBtn(home)
      Sixteen.clearHtml()
      Sixteen.loadSixteenGui()
    }
    navigation.appendChild(home)
    // AIM
    const aim = document.createElement("div")
    aim.setAttribute("class", "navigation-btns")
    aim.setAttribute("id", "sixteen-navigation-aim")
    aim.onclick = function () {
      Sixteen.resetBtns()
      Sixteen.activateBtn(aim)
      Sixteen.clearSixteenHomeContainer()
      Sixteen.loadAimHomeContainer()
    }
    navigation.appendChild(aim)
    // Settings
    const settings = document.createElement("div")
    settings.setAttribute("class", "navigation-btns")
    settings.setAttribute("id", "sixteen-navigation-settings")
    settings.onclick = function () {
      Sixteen.resetBtns()
      Sixteen.activateBtn(settings)
      Sixteen.clearSixteenHomeContainer()
      Sixteen.textModalActive()
    }
    navigation.appendChild(settings)
    Sixteen.insertHomeIconDiv()
    Sixteen.insertAimIconDiv()
    Sixteen.insertSettingsIconDiv()
    Sixteen.setDefaultSelectionBtn()
  }

  static textModalActive() {
    const modal = document.getElementById("modal")
    modal.classList.add("active")
  }

  static textModalClose() {
    const modal = document.getElementById("modal")
    modal.classList.remove("active")
  }

  static clearSixteenHomeContainer() {
    const sixteenHomeContainer = document.getElementById(
      "sixteen-home-container"
    )
    while (sixteenHomeContainer.firstChild) {
      sixteenHomeContainer.removeChild(sixteenHomeContainer.firstChild)
    }
  }

  static setDefaultSelectionBtn() {
    const sixteenNavigationHome = document.getElementById(
      "sixteen-navigation-home"
    )

    if (!sixteenNavigationHome.getAttribute("class").includes("active")) {
      const homeIconDiv = document.getElementsByClassName("home-icon-div")
      homeIconDiv[0].classList.add("active")
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

  static activateBtn(item) {
    item.children.item(0).classList.add("active")
    item.classList.add("active")
  }

  static resetBtns() {
    const btnDivs = document.getElementsByClassName("navigation-btns")
    for (let item of btnDivs) {
      item.children.item(0).classList.remove("active")
      item.classList.remove("active")
    }
  }

  // AIM Home Container
  static loadAimHomeContainer() {
    const sixteenHomeContainer = document.getElementById(
      "sixteen-home-container"
    )
    const aimHomeContainer = document.createElement("div")
    aimHomeContainer.setAttribute("class", "aim-home-container")
    aimHomeContainer.setAttribute("id", "aim-home-container")
    sixteenHomeContainer.appendChild(aimHomeContainer)
    Sixteen.loadAimTitle()
  }

  static loadAimTitle() {
    const aimHomeContainer = document.getElementById("aim-home-container")
    const aimTitleContainer = document.createElement("div")
    aimTitleContainer.setAttribute("class", "aim-title-container")
    aimTitleContainer.setAttribute("id", "aim-title-container")
    aimHomeContainer.appendChild(aimTitleContainer)
    Sixteen.loadAimTitleDiv()
    Sixteen.loadAimModalityContainer()
    Sixteen.loadGainBrightnessContainer()
    Sixteen.loadSpyAutolightContainer()
  }

  static loadSpyAutolightContainer() {
    const aimHomeContainer = document.getElementById("aim-home-container")
    const spyAutoContainer = document.createElement("div")
    spyAutoContainer.setAttribute("class", "spy-auto-container")
    spyAutoContainer.setAttribute("id", "spy-auto-container")
    aimHomeContainer.appendChild(spyAutoContainer)
    Sixteen.loadSpyTextToggleContainer()
    Sixteen.loadAutoLightContainer()
  }

  static loadSpyTextToggleContainer() {
    const spyAutoContainer = document.getElementById("spy-auto-container")
    const textToggleContainer = document.createElement("div")
    textToggleContainer.setAttribute("class", "spy-text-toggle-container")
    textToggleContainer.setAttribute("id", "spy-text-toggle-container")
    spyAutoContainer.appendChild(textToggleContainer)
    Sixteen.insertSpyText()
    Sixteen.insertSpyToggleContainer(textToggleContainer)
  }

  static insertSpyToggleContainer(textToggleContainer) {
    const spyToggle = document.createElement("div")
    spyToggle.setAttribute("class", "spy-toggle-container")
    spyToggle.setAttribute("id", "spy-toggle-container")
    textToggleContainer.appendChild(spyToggle)
    Sixteen.insertSpyToggleOffDiv(spyToggle)
    Sixteen.insertSpyToggleOnDiv(spyToggle)
  }

  static insertSpyToggleOnDiv(spyToggle) {
    const toggleOn = document.createElement("div")
    toggleOn.setAttribute("class", "spy-toggle-on")
    toggleOn.setAttribute("id", "spy-toggle-on")
    toggleOn.onclick = function () {
      Sixteen.activateSpyToggleOn()
      const autolightCircleDiv = document.getElementById("autolight-circle-div")
      if (
        autolightCircleDiv.getAttribute("class").includes("autolight-active")
      ) {
        Sixteen.autolightToggle()
      }
    }
    spyToggle.appendChild(toggleOn)
  }

  static insertSpyToggleOffDiv(spyToggle) {
    const toggleOff = document.createElement("div")
    toggleOff.setAttribute("class", "spy-toggle-off")
    toggleOff.setAttribute("id", "spy-toggle-off")
    toggleOff.innerText = "Off"
    spyToggle.appendChild(toggleOff)
  }

  static activateSpyToggleOn() {
    Sixteen.activateOffDiv()
    Sixteen.activateOnDiv()
  }

  static activateOnDiv() {
    const spyToggleOn = document.getElementById("spy-toggle-on")
    if (!spyToggleOn.getAttribute("class").includes("spy-on")) {
      spyToggleOn.innerText = "On"
      spyToggleOn.classList.toggle("spy-on")
      Sixteen.toggleOffAutolight()
    } else {
      spyToggleOn.innerText = ""
      spyToggleOn.classList.toggle("spy-on")
    }
  }

  static toggleOffAutolight() {
    const autolightCircleDiv = document.getElementById("autolight-circle-div")
    if (autolightCircleDiv.getAttribute("class").includes("autolight-active")) {
      console.log("toggle off autolight")
      Sixteen.autolightToggleImgDiv()
      Sixteen.autolightToggleCircleDiv()
    }
  }

  static activateOffDiv() {
    const spyToggleOff = document.getElementById("spy-toggle-off")
    if (spyToggleOff.getAttribute("class").includes("spy-on")) {
      spyToggleOff.innerText = "Off"
      spyToggleOff.classList.toggle("spy-on")
    } else {
      spyToggleOff.innerText = ""
      spyToggleOff.classList.toggle("spy-on")
    }
  }

  static insertSpyText() {
    const spyTextToggleContainer = document.getElementById(
      "spy-text-toggle-container"
    )
    const spyText = document.createElement("div")
    spyText.setAttribute("class", "spy-text")
    spyText.setAttribute("id", "spy-text")
    spyText.innerText = "SPY"
    spyTextToggleContainer.appendChild(spyText)
  }

  static loadGainBrightnessContainer() {
    const aimHomeContainer = document.getElementById("aim-home-container")
    const gainBrightnessContainer = document.createElement("div")
    gainBrightnessContainer.setAttribute("class", "gain-brightness-container")
    gainBrightnessContainer.setAttribute("id", "gain-brightness-container")
    aimHomeContainer.appendChild(gainBrightnessContainer)
    Sixteen.loadGainContainer()
    Sixteen.loadBrightnessContainer()
  }

  static loadBrightnessContainer() {
    const gainBrightnessContainer = document.getElementById(
      "gain-brightness-container"
    )
    const brightnessContainer = document.createElement("div")
    brightnessContainer.setAttribute("class", "brightness-container")
    brightnessContainer.setAttribute("id", "brightness-container")
    gainBrightnessContainer.appendChild(brightnessContainer)
    Sixteen.loadBrightnessTextDiv()
    Sixteen.loadBrightnessDiv()
  }

  static loadBrightnessDiv() {
    const brightnessContainer = document.getElementById("brightness-container")
    const brightnessDiv = document.createElement("div")
    brightnessDiv.setAttribute("class", "brightness-div")
    brightnessDiv.setAttribute("id", "brightness-div")
    brightnessContainer.appendChild(brightnessDiv)
    Sixteen.loadBrightnessPlusDiv()
    Sixteen.loadBrightnessScreen()
    Sixteen.loadBrightnessMinusDiv()
  }

  static loadBrightnessScreen() {
    const brightnessDiv = document.getElementById("brightness-div")
    const brightnessScreenDiv = document.createElement("div")
    brightnessScreenDiv.setAttribute("class", "brightness-screen-div")
    brightnessScreenDiv.setAttribute("id", "brightness-screen-div")
    brightnessDiv.appendChild(brightnessScreenDiv)
    Sixteen.loadBrightnessData()
  }

  static loadBrightnessData() {
    const brightnessScreenDiv = document.getElementById("brightness-screen-div")
    Sixteen.brightness().map((setting, i) => {
      const brightnessSettingDiv = document.createElement("div")
      brightnessSettingDiv.setAttribute("class", "brightness-setting")
      if (i === 0) {
        brightnessSettingDiv.classList.add("brightness-setting-show")
      }
      brightnessSettingDiv.setAttribute("id", `brightness-setting-${setting}`)
      brightnessSettingDiv.innerText = setting
      brightnessScreenDiv.appendChild(brightnessSettingDiv)
    })
  }

  static loadBrightnessTextDiv() {
    const brightnessContainer = document.getElementById("brightness-container")

    const brightnessTextDiv = document.createElement("div")
    brightnessTextDiv.setAttribute("class", "brightness-text")
    brightnessTextDiv.setAttribute("id", "brightness-text")
    brightnessTextDiv.innerText = "Brightness"
    brightnessContainer.appendChild(brightnessTextDiv)
  }

  static loadGainContainer() {
    const gainBrightnessContainer = document.getElementById(
      "gain-brightness-container"
    )
    const gainContainer = document.createElement("div")
    gainContainer.setAttribute("class", "gain-container")
    gainContainer.setAttribute("id", "gain-container")
    gainBrightnessContainer.appendChild(gainContainer)
    Sixteen.loadGainTextDiv()
    Sixteen.loadGainDiv()
  }

  static loadGainDiv() {
    const gainContainer = document.getElementById("gain-container")
    const gainDiv = document.createElement("div")
    gainDiv.setAttribute("class", "gain-div")
    gainDiv.setAttribute("id", "gain-div")
    gainContainer.appendChild(gainDiv)
    Sixteen.loadGainPlusDiv()
    Sixteen.loadGainScreen()
    Sixteen.loadGainMinusDiv()
  }

  static loadGainTextDiv() {
    const gainContainer = document.getElementById("gain-container")
    const gainTextDiv = document.createElement("div")
    gainTextDiv.setAttribute("class", "gain-text")
    gainTextDiv.setAttribute("id", "gain-text")
    gainTextDiv.innerText = "Gain"
    gainContainer.appendChild(gainTextDiv)
  }

  static loadBrightnessPlusDiv() {
    const brightnessDiv = document.getElementById("brightness-div")
    const plusDiv = document.createElement("div")
    plusDiv.setAttribute("class", "plus-div")
    plusDiv.setAttribute("id", "brightness-plus-div")
    plusDiv.onclick = function () {
      Sixteen.brightnessPlusSlide(1)
    }
    brightnessDiv.appendChild(plusDiv)
    Sixteen.loadBrightnessPlusImg()
  }

  static brightnessMinusSlide(n) {
    const brightnessSettingDiv =
      document.getElementsByClassName("brightness-setting")
    let currentSettingIndex
    for (let item of brightnessSettingDiv) {
      if (Object.values(item.classList).includes("brightness-setting-show")) {
        currentSettingIndex = parseInt(item.innerText - 1)
        item.classList.remove("brightness-setting-show")
      }
    }
    Sixteen.advanceBrightnessSetting(n, currentSettingIndex)
  }

  static brightnessPlusSlide(n) {
    const brightnessSettingDiv =
      document.getElementsByClassName("brightness-setting")
    let currentSettingIndex
    for (let item of brightnessSettingDiv) {
      if (Object.values(item.classList).includes("brightness-setting-show")) {
        currentSettingIndex = parseInt(item.innerText - 1)
        item.classList.remove("brightness-setting-show")
      }
    }
    Sixteen.advanceBrightnessSetting(n, currentSettingIndex)
  }

  static advanceBrightnessSetting(n, currentSettingIndex) {
    const brightnessSettingsNameDivs =
      document.getElementsByClassName("brightness-setting")
    // Conver divs to array
    const divsArray = Array.from(brightnessSettingsNameDivs)
    let nextSetting
    if (n + currentSettingIndex >= 7) {
      nextSetting = 0
    } else if (n + currentSettingIndex < 0) {
      nextSetting = 6
    } else {
      nextSetting = n + currentSettingIndex
    }

    divsArray[nextSetting].classList.add("brightness-setting-show")
  }

  static loadBrightnessPlusImg() {
    const brightnessDiv = document.getElementById("brightness-plus-div")
    const plusImgDiv = document.createElement("div")
    plusImgDiv.setAttribute("class", "plus-img-div")
    brightnessDiv.appendChild(plusImgDiv)
  }

  static loadBrightnessMinusDiv() {
    const brightnessDiv = document.getElementById("brightness-div")
    const minusDiv = document.createElement("div")
    minusDiv.setAttribute("class", "minus-div")
    minusDiv.setAttribute("id", "brightness-minus-div")
    minusDiv.onclick = function () {
      console.log("minus fired")
      Sixteen.brightnessMinusSlide(-1)
    }
    brightnessDiv.appendChild(minusDiv)
    Sixteen.loadBrightnessMinusImg()
  }

  static loadBrightnessMinusImg() {
    const brightnessDiv = document.getElementById("brightness-minus-div")
    const minusImgDiv = document.createElement("div")
    minusImgDiv.setAttribute("class", "minus-img-div")
    brightnessDiv.appendChild(minusImgDiv)
  }

  static loadGainMinusDiv() {
    const gainDiv = document.getElementById("gain-div")
    const minusDiv = document.createElement("div")
    minusDiv.setAttribute("class", "minus-div")
    minusDiv.setAttribute("id", "gain-minus-div")
    minusDiv.onclick = function () {
      Sixteen.gainMinusSlide(-1)
    }
    gainDiv.appendChild(minusDiv)
    Sixteen.loadGainMinusImg()
  }

  static loadGainMinusImg() {
    const gainDiv = document.getElementById("gain-minus-div")
    const minusImgDiv = document.createElement("div")
    minusImgDiv.setAttribute("class", "minus-img-div")
    gainDiv.appendChild(minusImgDiv)
  }

  static loadGainPlusDiv() {
    const gainDiv = document.getElementById("gain-div")
    const plusDiv = document.createElement("div")
    plusDiv.setAttribute("class", "plus-div")
    plusDiv.setAttribute("id", "gain-plus-div")
    plusDiv.onclick = function () {
      Sixteen.gainPlusSlide(1)
    }
    gainDiv.appendChild(plusDiv)
    Sixteen.loadGainPlusImg()
  }

  static gainMinusSlide(n) {
    const gainSettingDiv = document.getElementsByClassName("gain-setting")
    let currentSettingIndex
    for (let item of gainSettingDiv) {
      if (Object.values(item.classList).includes("gain-setting-show")) {
        currentSettingIndex = parseInt(item.innerText - 1)
        item.classList.remove("gain-setting-show")
      }
    }
    Sixteen.advanceGainSetting(n, currentSettingIndex)
  }

  static gainPlusSlide(n) {
    const gainSettingDiv = document.getElementsByClassName("gain-setting")
    let currentSettingIndex
    for (let item of gainSettingDiv) {
      if (Object.values(item.classList).includes("gain-setting-show")) {
        currentSettingIndex = parseInt(item.innerText - 1)
        item.classList.remove("gain-setting-show")
      }
    }
    Sixteen.advanceGainSetting(n, currentSettingIndex)
  }

  static advanceGainSetting(n, currentSettingIndex) {
    const gainSettingsNameDivs = document.getElementsByClassName("gain-setting")
    // Conver divs to array
    const divsArray = Array.from(gainSettingsNameDivs)
    let nextSetting
    if (n + currentSettingIndex >= 10) {
      nextSetting = 0
    } else if (n + currentSettingIndex < 0) {
      nextSetting = 9
    } else {
      nextSetting = n + currentSettingIndex
    }

    divsArray[nextSetting].classList.add("gain-setting-show")
  }

  static loadGainPlusImg() {
    const gainDiv = document.getElementById("gain-plus-div")
    const plusImgDiv = document.createElement("div")
    plusImgDiv.setAttribute("class", "plus-img-div")
    gainDiv.appendChild(plusImgDiv)
  }

  static loadGainScreen() {
    const gainDiv = document.getElementById("gain-div")
    const gainScreenDiv = document.createElement("div")
    gainScreenDiv.setAttribute("class", "gain-screen-div")
    gainScreenDiv.setAttribute("id", "gain-screen-div")
    gainDiv.appendChild(gainScreenDiv)
    Sixteen.loadGainData()
  }

  static loadGainData() {
    const gainScreenDiv = document.getElementById("gain-screen-div")
    Sixteen.gain().map((setting, i) => {
      const gainSettingDiv = document.createElement("div")
      gainSettingDiv.setAttribute("class", "gain-setting")
      gainSettingDiv.setAttribute("id", `gain-setting-${setting}`)
      if (i === 0) {
        gainSettingDiv.classList.add("gain-setting-show")
      }
      gainSettingDiv.innerText = setting
      gainScreenDiv.appendChild(gainSettingDiv)
    })
  }

  // Aim Modality
  static loadAimModalityContainer() {
    const aimHomeContainer = document.getElementById("aim-home-container")
    const aimModalityContainer = document.createElement("div")
    aimModalityContainer.setAttribute("class", "aim-modality-container")
    aimModalityContainer.setAttribute("id", "aim-modality-container")
    aimHomeContainer.appendChild(aimModalityContainer)
    Sixteen.loadaimModailityArrowContainer()
    Sixteen.loadAimModailityDotsContainer()
  }

  static loadAimModailityDotsContainer() {
    const aimModalityContainer = document.getElementById(
      "aim-modality-container"
    )
    const aimModailityDotsContainer = document.createElement("div")
    aimModailityDotsContainer.setAttribute("class", "modality-dots-container")
    aimModailityDotsContainer.setAttribute("id", "modality-dots-container")
    aimModalityContainer.appendChild(aimModailityDotsContainer)
    Sixteen.loadModalityDots()
  }

  static loadModalityDots() {
    const modalityDotsContainer = document.getElementById(
      "modality-dots-container"
    )
    Sixteen.modalityDots().map((dot) => {
      const dotDiv = document.createElement("div")
      dotDiv.setAttribute("class", "modality-dot-div")
      dotDiv.setAttribute("id", `modality-dot-${dot}`)
      modalityDotsContainer.appendChild(dotDiv)
    })
    Sixteen.loadAimDefaultSpecialtyDot()
  }

  static loadAimDefaultSpecialtyDot() {
    const modalityDots = document.getElementsByClassName("modality-dot-div")
    modalityDots[0].classList.add("selected")
  }

  static loadaimModailityArrowContainer() {
    const aimModalityContainer = document.getElementById(
      "aim-modality-container"
    )
    const aimModailityArrowContainer = document.createElement("div")
    aimModailityArrowContainer.setAttribute("class", "modality-arrow-container")
    aimModailityArrowContainer.setAttribute("id", "modality-arrow-container")
    aimModalityContainer.appendChild(aimModailityArrowContainer)
    Sixteen.loadAimLeftArrowContainer()
    Sixteen.loadAimModalityScreen()
    Sixteen.loadAimRightArrowContainer()
  }

  static loadAimRightArrowContainer() {
    const modalityArrowContainer = document.getElementById(
      "modality-arrow-container"
    )
    const aimRightArrow = document.createElement("div")
    aimRightArrow.setAttribute("class", "aim-arrow-container")
    aimRightArrow.setAttribute("id", "aim-right-arrow-container")
    modalityArrowContainer.appendChild(aimRightArrow)
    Sixteen.loadRightArrowDiv()
  }

  static loadRightArrowDiv() {
    const aimRightArrowContainer = document.getElementById(
      "aim-right-arrow-container"
    )
    const aimRightArrowDiv = document.createElement("div")
    aimRightArrowDiv.setAttribute("class", "aim-arrow-div")
    aimRightArrowDiv.setAttribute("id", "aim-right-arrow-div")
    aimRightArrowDiv.onclick = function () {
      Sixteen.aimPlusSlides(1)
    }
    aimRightArrowContainer.appendChild(aimRightArrowDiv)
  }

  static loadLeftArrowDiv() {
    const aimLeftArrowContainer = document.getElementById(
      "aim-left-arrow-container"
    )
    const aimLeftArrowDiv = document.createElement("div")
    aimLeftArrowDiv.setAttribute("class", "aim-arrow-div")
    aimLeftArrowDiv.setAttribute("id", "aim-left-arrow-div")
    aimLeftArrowDiv.onclick = function () {
      Sixteen.aimPlusSlides(-1)
    }
    aimLeftArrowContainer.appendChild(aimLeftArrowDiv)
  }

  static loadAimModalityScreen() {
    const modalityArrowContainer = document.getElementById(
      "modality-arrow-container"
    )
    const aimModalityScreen = document.createElement("div")
    aimModalityScreen.setAttribute("class", "aim-modality-screen")
    aimModalityScreen.setAttribute("id", "aim-modality-screen")
    modalityArrowContainer.appendChild(aimModalityScreen)
    Sixteen.loadModalityList()
  }

  static loadModalityList() {
    const aimModalityScreen = document.getElementById("aim-modality-screen")

    Sixteen.modalities().map((modality) => {
      const modalityDiv = document.createElement("div")
      modalityDiv.setAttribute("class", "modality-name")
      modalityDiv.setAttribute("id", `${modality}-div`)
      modalityDiv.setAttribute("data-modality", `${modality}`)
      Sixteen.assignModalityDisplay(modality, modalityDiv)
      modalityDiv.innerText = modality
      aimModalityScreen.appendChild(modalityDiv)
    })
  }

  static assignModalityDisplay(modality, modalityDiv) {
    if (modality === "Overlay") {
      modalityDiv.classList.add("show-modality")
    }
  }

  static loadAimLeftArrowContainer() {
    const modalityArrowContainer = document.getElementById(
      "modality-arrow-container"
    )
    const aimLeftArrow = document.createElement("div")
    aimLeftArrow.setAttribute("class", "aim-arrow-container")
    aimLeftArrow.setAttribute("id", "aim-left-arrow-container")
    modalityArrowContainer.appendChild(aimLeftArrow)
    Sixteen.loadLeftArrowDiv()
  }

  static loadAimTitleDiv() {
    const aimTitleContainer = document.getElementById("aim-title-container")
    const aimTitleDiv = document.createElement("div")
    aimTitleDiv.setAttribute("class", "aim-title-div")
    aimTitleDiv.setAttribute("id", "aim-title-div")
    aimTitleDiv.innerText = "SPY"
    aimTitleContainer.appendChild(aimTitleDiv)
  }

  // Aim Carousel
  static aimPlusSlides(n) {
    Sixteen.aimShowSlides(n)
  }

  static aimShowSlides(n) {
    const modalityNameDivs = document.getElementsByClassName("modality-name")
    const divsArray = Array.from(modalityNameDivs)
    let currentIndex
    divsArray.map((div, i) => {
      if (Object.values(div.classList).includes("show-modality")) {
        currentIndex = i
        div.classList.remove("show-modality")
      }
    })
    Sixteen.aimShowNextSpecialty(n, currentIndex)
  }

  static aimShowNextSpecialty(n, currentIndex) {
    const modalityNameDivs = document.getElementsByClassName("modality-name")
    const divsArray = Array.from(modalityNameDivs)
    // console.log(n, currentIndex, divsArray[0])
    let nextModality
    if (n + currentIndex >= 3) {
      nextModality = 0
    } else if (n + currentIndex < 0) {
      nextModality = 2
    } else {
      nextModality = n + currentIndex
    }
    divsArray[nextModality].classList.add("show-modality")
    Sixteen.clearAimSpecialtyDots(nextModality)
  }

  static clearAimSpecialtyDots(nextModality) {
    const aimSpecialtyDots = document.getElementsByClassName("modality-dot-div")
    Array.from(aimSpecialtyDots).map((dot) => {
      if (Object.values(dot.classList).includes("selected")) {
        dot.classList.remove("selected")
      }
    })

    Sixteen.selectedModalityDot(nextModality)
  }

  static selectedModalityDot(nextModality) {
    const modalityDots = document.getElementsByClassName("modality-dot-div")
    modalityDots[nextModality].classList.add("selected")
  }

  // Advance settings page
  static loadAdvanceSettingsHomeContainer() {
    const sixteenHomeContainer = document.getElementById(
      "sixteen-home-container"
    )
    const advanceSettingHomeContainer = document.createElement("div")
    advanceSettingHomeContainer.setAttribute("class", "setting-home-container")
    advanceSettingHomeContainer.setAttribute(
      "id",
      "advance-setting-home-container"
    )
    sixteenHomeContainer.appendChild(advanceSettingHomeContainer)
    Sixteen.hideNavigation()
    Sixteen.loadAdvancedSettingsTitleDiv()
    Sixteen.loadAdvancedSettingsBtnsDiv()
  }

  static hideNavigation() {
    const sixteenNavigation = document.getElementById("sixteen-navigation")
    sixteenNavigation.classList.add("advanced")
  }

  static loadAdvancedSettingsBtnsDiv() {
    const advanceSettingHomeContainer = document.getElementById(
      "advance-setting-home-container"
    )
    const loadAdvancedSettingsBtnsDiv = document.createElement("div")
    loadAdvancedSettingsBtnsDiv.setAttribute(
      "class",
      "advanced-settings-btns-div"
    )
    loadAdvancedSettingsBtnsDiv.setAttribute("id", "advanced-settings-btns-div")
    advanceSettingHomeContainer.appendChild(loadAdvancedSettingsBtnsDiv)
    Sixteen.loadAdvancedSettingsBtns()
  }

  static loadAdvancedSettingsBtns() {
    const advancedSettingsBtnsDiv = document.getElementById(
      "advanced-settings-btns-div"
    )
    Sixteen.advancedSettings().map((setting) => {
      const btnContainer = document.createElement("div")
      btnContainer.setAttribute("class", "advanced-settings-btn-container")
      btnContainer.setAttribute("id", `${setting.name}-btn-container`)
      // Image
      const btnImg = document.createElement("div")
      btnImg.setAttribute("class", "advanced-settings-btn-img")
      if (setting.name === "Button Config") {
        btnImg.setAttribute("id", "Button-btn-img")
      } else if (setting.name === "Advanced Camera") {
        btnImg.setAttribute("id", "Advanced-btn-img")
      } else {
        btnImg.setAttribute("id", `${setting.name}-btn-img`)
      }
      // Text
      const btnText = document.createElement("div")
      btnText.setAttribute("class", "advanced-settings-btn-text")
      btnText.setAttribute("id", `${setting.name}-btn-text`)
      btnText.innerText = setting.name
      btnContainer.appendChild(btnImg)
      btnContainer.appendChild(btnText)
      advancedSettingsBtnsDiv.appendChild(btnContainer)
    })
  }

  static loadAdvancedSettingsTitleDiv() {
    const advanceSettingHomeContainer = document.getElementById(
      "advance-setting-home-container"
    )
    const advancedSettingsTitleDiv = document.createElement("div")
    advancedSettingsTitleDiv.setAttribute(
      "class",
      "advanced-settings-title-div"
    )
    advancedSettingsTitleDiv.setAttribute("id", "advanced-settings-title-div")
    advanceSettingHomeContainer.appendChild(advancedSettingsTitleDiv)
    Sixteen.advancedTitleText()
    Sixteen.advancedExitBtn()
  }

  static advancedExitBtn() {
    const advancedSettingsTitleDiv = document.getElementById(
      "advanced-settings-title-div"
    )
    const advancedExitBtn = document.createElement("div")
    advancedExitBtn.setAttribute("class", "advanced-exit-btn")
    advancedExitBtn.innerHTML = "&times;"
    advancedExitBtn.onclick = function () {
      Sixteen.showNavigation()
      Sixteen.clearSixteenHomeContainer()
      Sixteen.textModalActive()
    }
    advancedSettingsTitleDiv.appendChild(advancedExitBtn)
  }

  static showNavigation() {
    const sixteenNavigation = document.getElementById("sixteen-navigation")
    sixteenNavigation.classList.remove("advanced")
  }

  static advancedTitleText() {
    const advancedSettingsTitleDiv = document.getElementById(
      "advanced-settings-title-div"
    )
    const advancedTitleText = document.createElement("div")
    advancedTitleText.setAttribute("class", "advanced-title-text")
    advancedTitleText.innerText = "Advanced Settings"
    advancedSettingsTitleDiv.appendChild(advancedTitleText)
  }

  // Setting page
  static loadSettingHomeContainer() {
    const sixteenHomeContainer = document.getElementById(
      "sixteen-home-container"
    )
    const settingHomeContainer = document.createElement("div")
    settingHomeContainer.setAttribute("class", "setting-home-container")
    settingHomeContainer.setAttribute("id", "setting-home-container")
    sixteenHomeContainer.appendChild(settingHomeContainer)
    Sixteen.loadSettingsDivsContainer()
    Sixteen.loadSettingsAutolightContainer()
  }

  static loadSettingsAutolightContainer() {
    const settingsHomeContainer = document.getElementById(
      "setting-home-container"
    )
    const autolightContainer = document.createElement("div")
    autolightContainer.setAttribute("class", "settings-autolight-container")
    autolightContainer.setAttribute("id", "settings-autolight-container")
    settingsHomeContainer.appendChild(autolightContainer)
    Sixteen.loadSettingsAutolightImageTextDiv()
  }

  static loadSettingsAutolightImageTextDiv() {
    const settingsAutolightContainer = document.getElementById(
      "settings-autolight-container"
    )
    const autolightImageTextDiv = document.createElement("div")
    autolightImageTextDiv.setAttribute("class", "settings-autolight-text-div")
    autolightImageTextDiv.setAttribute("id", "settings-autolight-text-div")
    settingsAutolightContainer.appendChild(autolightImageTextDiv)
    Sixteen.settingsAutolightCircleDiv()
    Sixteen.settingsAutolightTextDiv()
  }

  static settingsAutolightTextDiv() {
    const settingsAutolightTextDiv = document.getElementById(
      "settings-autolight-text-div"
    )
    const settingsAutolightText = document.createElement("div")
    settingsAutolightText.setAttribute("class", "settings-autolight-text")
    settingsAutolightText.setAttribute("id", "settings-autolight-text")
    settingsAutolightText.innerText = "Auto Light"
    settingsAutolightTextDiv.appendChild(settingsAutolightText)
  }

  static settingsAutolightCircleDiv() {
    const autolightImageTextDiv = document.getElementById(
      "settings-autolight-text-div"
    )
    const settingsAutolightCircle = document.createElement("div")
    settingsAutolightCircle.setAttribute("class", "settings-autolight-circle")
    settingsAutolightCircle.setAttribute("id", "settings-autolight-circle")
    autolightImageTextDiv.appendChild(settingsAutolightCircle)
    Sixteen.settingsAutolightImgDiv()
  }

  static settingsAutolightImgDiv() {
    const settingsAutolightCircle = document.getElementById(
      "settings-autolight-circle"
    )
    const settingsAutolightImage = document.createElement("div")
    settingsAutolightImage.setAttribute("class", "settings-autolight-image")
    settingsAutolightImage.setAttribute("id", "settings-autolight-image")
    settingsAutolightCircle.appendChild(settingsAutolightImage)
    Sixteen.autolightToggleEventListener()
  }

  static loadSettingsDivsContainer() {
    const settingsHomeContainer = document.getElementById(
      "setting-home-container"
    )
    const settingsDivsContainer = document.createElement("div")
    settingsDivsContainer.setAttribute("class", "settings-divs-container")
    settingsDivsContainer.setAttribute("id", "settings-divs-container")
    settingsHomeContainer.appendChild(settingsDivsContainer)
    Sixteen.settingsLoadSettingsWindows()
  }

  static settingsLoadSettingsWindows() {
    const settingsDivsContainer = document.getElementById(
      "settings-divs-container"
    )
    Sixteen.settings().map((setting) => {
      // Settings-setting-container
      const settingsSettingContainer = document.createElement("div")
      settingsSettingContainer.setAttribute(
        "class",
        "settings-setting-container"
      )
      // Settings-setting-text
      const settingsSettingTitle = document.createElement("div")
      settingsSettingTitle.setAttribute("class", "settings-setting-title")
      settingsSettingTitle.innerText = setting.name
      // Setting div
      const settingDiv = document.createElement("div")
      settingDiv.setAttribute("class", "settings-setting-div")
      settingDiv.setAttribute("id", `${setting.name}-setting-div`)
      settingsSettingContainer.appendChild(settingsSettingTitle)
      // Add plus div, setting window and minus div
      const plusWindowMinusDiv = document.createElement("div")
      plusWindowMinusDiv.setAttribute("class", "plus-window-minus-div")
      // Plus div
      const plusDiv = document.createElement("div")
      plusDiv.setAttribute("class", "plus-div")
      plusDiv.setAttribute("id", `${setting.name}-plus-div`)
      // plus img
      const plusImg = document.createElement("div")
      plusImg.setAttribute("class", "plus-img-div")
      plusImg.setAttribute("id", `${setting.name}-plus-img`)
      plusDiv.appendChild(plusImg)
      plusWindowMinusDiv.appendChild(plusDiv)
      settingsSettingContainer.appendChild(plusWindowMinusDiv)
      // Window div
      const windowDiv = document.createElement("div")
      windowDiv.setAttribute("class", "settings-window-div")
      windowDiv.setAttribute("id", `${setting.name}-window-div`)
      if (windowDiv.getAttribute("id") === "Brightness-window-div") {
        Sixteen.brightness().map((value, i) => {
          const windowValue = document.createElement("div")
          windowValue.setAttribute("class", "settings-setting-value")
          windowValue.setAttribute("id", `${setting.name}-settings-setting`)
          if (i === 0) {
            windowValue.classList.add("settings-setting-show")
          }
          windowValue.innerText = value
          windowDiv.appendChild(windowValue)
          plusWindowMinusDiv.appendChild(windowDiv)
        })
      } else if (windowDiv.getAttribute("id") === "Zoom-window-div") {
        Sixteen.zoom().map((value, i) => {
          const windowValue = document.createElement("div")
          windowValue.setAttribute("class", "settings-setting-value")
          windowValue.setAttribute("id", `${setting.name}-settings-setting`)

          if (i === 0) {
            windowValue.classList.add("settings-setting-show")
          }
          windowValue.innerText = value
          windowDiv.appendChild(windowValue)
          plusWindowMinusDiv.appendChild(windowDiv)
        })
      } else {
        Sixteen.enhancement().map((value, i) => {
          const windowValue = document.createElement("div")
          windowValue.setAttribute("class", "settings-setting-value")
          windowValue.setAttribute("id", `${setting.name}-settings-setting`)

          if (i === 0) {
            windowValue.classList.add("settings-setting-show")
          }
          windowValue.innerText = value
          windowDiv.appendChild(windowValue)
          plusWindowMinusDiv.appendChild(windowDiv)
        })
      }

      settingsSettingContainer.appendChild(plusWindowMinusDiv)
      // Minus div
      const minusDiv = document.createElement("div")
      minusDiv.setAttribute("class", "minus-div")
      minusDiv.setAttribute("id", `${setting.name}-minus-div`)
      // Minus img
      const minusImg = document.createElement("div")
      minusImg.setAttribute("class", "minus-img-div")
      minusImg.setAttribute("id", `${setting.name}-minus-img`)
      minusDiv.appendChild(minusImg)
      plusWindowMinusDiv.appendChild(minusDiv)
      settingsSettingContainer.appendChild(plusWindowMinusDiv)
      settingDiv.appendChild(settingsSettingContainer)
      settingsDivsContainer.appendChild(settingDiv)
      // Plus/Minus event listener
      plusDiv.onclick = function () {
        let settingName
        if (plusDiv.id === "Enhancement-plus-div") {
          settingName = "Enhancement"
        } else if (plusDiv.id === "Zoom-plus-div") {
          settingName = "Zoom"
        } else {
          settingName = "Brightness"
        }
        Sixteen.advancePlusSetting(1, settingName)
      }
      minusDiv.onclick = function () {
        let settingName
        if (plusDiv.id === "Enhancement-plus-div") {
          settingName = "Enhancement"
        } else if (plusDiv.id === "Zoom-plus-div") {
          settingName = "Zoom"
        } else {
          settingName = "Brightness"
        }
        Sixteen.advanceMinusSetting(-1, settingName)
      }
    })
  }

  static advancePlusSetting(n, settingName) {
    const settingSettingsDiv = document.getElementById(
      `${settingName}-settings-setting`
    )
    const currentValue = parseInt(settingSettingsDiv.innerText)

    if (settingName === "Brightness") {
      if (currentValue === 8) {
        settingSettingsDiv.innerText = 8
        settingSettingsDiv.classList.add("settings-setting-show")
      } else {
        settingSettingsDiv.innerText = currentValue + n
        settingSettingsDiv.classList.add("settings-setting-show")
      }
    }

    if (settingName === "Zoom") {
      if (currentValue === 7) {
        settingSettingsDiv.innerText = 7
        settingSettingsDiv.classList.add("settings-setting-show")
      } else {
        settingSettingsDiv.innerText = currentValue + n
        settingSettingsDiv.classList.add("settings-setting-show")
      }
    }

    if (settingName === "Enhancement") {
      if (currentValue === 8) {
        settingSettingsDiv.innerText = 8
        settingSettingsDiv.classList.add("settings-setting-show")
      } else {
        settingSettingsDiv.innerText = currentValue + n
        settingSettingsDiv.classList.add("settings-setting-show")
      }
    }
  }

  static advanceMinusSetting(n, settingName) {
    console.log(n)
    const settingSettingsDiv = document.getElementById(
      `${settingName}-settings-setting`
    )
    const currentValue = parseInt(settingSettingsDiv.innerText)

    if (settingName === "Brightness") {
      if (currentValue === 1) {
        settingSettingsDiv.innerText = 1
        settingSettingsDiv.classList.add("settings-setting-show")
      } else {
        settingSettingsDiv.innerText = currentValue + n
        settingSettingsDiv.classList.add("settings-setting-show")
      }
    }

    if (settingName === "Zoom") {
      if (currentValue === 1) {
        settingSettingsDiv.innerText = 1
        settingSettingsDiv.classList.add("settings-setting-show")
      } else {
        settingSettingsDiv.innerText = currentValue + n
        settingSettingsDiv.classList.add("settings-setting-show")
      }
    }

    if (settingName === "Enhancement") {
      if (currentValue === 1) {
        settingSettingsDiv.innerText = 1
        settingSettingsDiv.classList.add("settings-setting-show")
      } else {
        settingSettingsDiv.innerText = currentValue + n
        settingSettingsDiv.classList.add("settings-setting-show")
      }
    }
  }
}
