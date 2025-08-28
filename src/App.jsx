import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/header'
import Footer from './components/footer'
import Page from './components/CalcTMB'
import Home from './pages/home'
import Sobre from './pages/sobre'
import PoliPriv from './pages/politicaPrivacidade'
import Macros from './pages/macronutrientes'
import Micros from './pages/micronutrientes'
import { Analytics } from '@vercel/analytics/react'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Page/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/politicadeprivacidade" element={<PoliPriv/>}/>
        <Route path="/macronutrientes" element={<Macros/>}/>
        <Route path="/micronutrientes" element={<Micros/>}/>
        <Analytics/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
