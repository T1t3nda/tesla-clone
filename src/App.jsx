import React from "react"
import Navbar from "./components/navbar"
import Model3_icon from "./assets/HomepageModel3.jpeg"
import MainPart from "./components/MainPart"
import ModelX_icon from "./assets/ModelX.jpeg"
import ModelY_icon from "./assets/ModelY.jpeg"
import ModelS_icon from "./assets/ModelS.jpeg"
import SolarPanels_icon from "./assets/SolarPanels.jpeg"
import SolarRoof_icon from "./assets/SolarRoof.jpeg"
import Powerwall_icon from "./assets/Powerwall.jpeg"
import Accessories_icon from "./assets/Accessories.jpeg"
import Footer from "./components/Footer"

const App = () => {
  const buttons = [
    {
      text: "Order now",
      link: "#",
      color: "bg-blue-400 text-gray-900 hover:bg-blue-300",
    },
    {
      text: "Demo Drive",
      link: "#",
      color: "bg-white text-black hover:bg-white",
    },
  ]
  const buttons2 = [
    {
      text: "Shop now",
      link: "#",
      color: "bg-blue-400 text-gray-900 hover:bg-blue-300",
    },
  ]
  const buttons3 = [
    {
      text: "Order now",
      link: "#",
      color: "bg-blue-400 text-gray-900 hover:bg-blue-300",
    },
    {
      text: "Learn More",
      link: "#",
      color: "bg-white text-black hover:bg-white",
    },
  ]
  return (
    <>
      <Navbar />
      <MainPart
        imageSrc={Model3_icon}
        heading='Model 3'
        subheading='Order Online for Touchless Delivery'
        paragraph='From $34,9901'
        buttons={buttons}
      />
      <MainPart
        imageSrc={ModelY_icon}
        heading='Model Y'
        subheading='Order Online for Touchless Delivery'
        paragraph='From $34,9901'
        buttons={buttons}
      />
      <MainPart
        imageSrc={ModelX_icon}
        heading='Model X'
        subheading='Order Online for Touchless Delivery'
        buttons={buttons}
      />
      <MainPart
        imageSrc={ModelS_icon}
        heading='Model S'
        subheading='Order Online for Touchless Delivery'
        buttons={buttons}
      />
      <MainPart
        imageSrc={SolarPanels_icon}
        heading='Solar Panels'
        subheading='Lowest Cost Solar Panels in America'
        buttons={buttons3}
      />
      <MainPart
        imageSrc={SolarRoof_icon}
        heading='Solar Roof'
        subheading='Produce Clean Energy From Your Roof'
        buttons={buttons3}
      />
      <MainPart
        imageSrc={Powerwall_icon}
        heading='Powerwall'
        buttons={buttons3}
      />
      <MainPart
        imageSrc={Accessories_icon}
        heading='Accessories'
        subheading='From $34,9901'
        buttons={buttons2}
      />
      <Footer />
    </>
  )
}

export default App
