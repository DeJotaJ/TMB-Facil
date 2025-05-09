import './App.css'
import { Route, Routes } from 'react-router'
import Header from './components/header'
import Footer from './components/footer'
import Page from './components/CalcTMB'
import Home from './pages/home'
import Sobre from './pages/sobre'
import PoliPriv from './pages/politicaPrivacidade'
import Nutricao from './pages/nutricao'
import Macros from './pages/macronutrientes'
import Micros from './pages/micronutrientes'
import Hidratacao from './pages/hidratacao'
import Metabolismo from './pages/digestaoMetabolismo'
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
        <Route path="/nutricao" element={<Nutricao/>}/>
        <Route path="/macronutrientes" element={<Macros/>}/>
        <Route path="/micronutrientes" element={<Micros/>}/>
        <Route path="/hidratacao" element={<Hidratacao/>}/>
        <Route path="/digestao-e-metabolismo" element={<Metabolismo/>}/>
      </Routes>
      <Analytics/>
      <Footer/>
    </>
  )
}

export default App
