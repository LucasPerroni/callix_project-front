import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import Next from "./pages/Next"
import Latest from "./pages/Latest"
import Upcoming from "./pages/Upcoming"
import Past from "./pages/Past"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/next" element={<Next />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/past" element={<Past />} />
        <Route path="*" element={<h1>This page doesn't exist...</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
