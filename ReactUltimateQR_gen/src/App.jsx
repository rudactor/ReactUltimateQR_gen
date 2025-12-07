import { Route, Routes } from "react-router-dom"
import { WelcomePage } from "./screen/welcomePage"
import { HomePage } from "./screen/homePage"
import { AboutMe } from "./screen/subscreens/aboutme"
import { Docs } from "./screen/subscreens/docs"
import { Sponsor } from "./screen/subscreens/sponsor"

function App() {

  return (
    <Routes>
      <Route path ="/" element={<WelcomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/aboutme" element={<AboutMe />}/>
      <Route path="/docs" element={<Docs />} />
      <Route path="/sponsor" element={<Sponsor />} />
    </Routes>
  )
}

export default App
