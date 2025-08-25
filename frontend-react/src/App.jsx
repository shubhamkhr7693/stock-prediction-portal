import { useState } from 'react'
import './assets/CSS/style.css'
import Header from './components/Header'
import Main from './components/Main'

import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Main/>
    <Footer/>
     
    </>
  )
}

export default App
