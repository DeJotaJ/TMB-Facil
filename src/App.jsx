import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Page from './components/CalcTMB'
import Home from './pages/home'
import Sobre from './pages/sobre'
import PoliPriv from './pages/politicaPrivacidade'
import Macros from './pages/macronutrientes'
import { Route, Routes } from 'react-router'

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
      </Routes>
      <Footer/>
    </>
  )
}

export default App
