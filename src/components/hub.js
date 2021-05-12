class Hub {
  static loadHubLandingPage() {
    //     <img src="workplace.jpg" alt="Workplace" usemap="#workmap">
    //     <map name="workmap">
    //       <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
    //       <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
    //       <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
    //   </map>

    const hubImg = document.createElement("img")
    hubImg.setAttribute("src", "../../images/hub1.png")
    hubImg.setAttribute("alt", "HUB")
    hubImg.setAttribute("usemap", "#hubmap")
    hubImg.setAttribute("id", "hub-img")
    // HUB Map
    const hubMap = document.createElement("map")
    hubMap.setAttribute("name", "hubmap")
    // HUB Map Area
    const hubMapArea = document.createElement("area")
    hubMapArea.setAttribute("shape", "rect")
    hubMapArea.setAttribute("coords", "750, 428, 802, 776")
    hubMapArea.onclick = function () {
      const changeHubImg = document.getElementById("hub-img")
      changeHubImg.getAttribute("src")
      console.log(changeHubImg.src)
      changeHubImg.setAttribute("src", "../../images/hub2.png")
    }

    hubMap.appendChild(hubMapArea)

    Sixteen.guiSimulatorContainer().appendChild(hubImg)
    Sixteen.guiSimulatorContainer().appendChild(hubMap)
  }
}
