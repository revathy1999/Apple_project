import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Subhero from './components/Subhero'
import Hero from './components/Hero'
import Macbook_AD from './components/Macbook_AD'
import Appleproducts from './components/Appleproducts'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Subhero />
      <Hero />
      <Macbook_AD />
      <Appleproducts/>
      <Footer />
    </>
  )
}

export default App
