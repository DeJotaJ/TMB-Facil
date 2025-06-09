import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import Page from './components/CalcTMB'
import Home from './pages/home'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculadora" element={<Page/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
