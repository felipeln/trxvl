import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/home/home'
import {Beaches} from './views/categories/beaches/beaches'
function App() {

  return (
      <>
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories/beaches" element={<Beaches />} />
            <Route path="/categories/deserts" element={<Home />} />
            <Route path="/categories/mountains" element={<Home />} />
            <Route path="/categories/iconic-cities" element={<Home />} />
            <Route path="/categories/houseboats" element={<Home />} />
            <Route path="/categories/countryside" element={<Home />} />
            <Route path="/categories/camping" element={<Home />} />
            <Route path="/categories/castles" element={<Home />} />
            <Route path="/categories/skiing" element={<Home />} />
            <Route path="/categories/tropical" element={<Home />} />
          </Routes>
         </BrowserRouter>
      </>
  )
}

export default App
