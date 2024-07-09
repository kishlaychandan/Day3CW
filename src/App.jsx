import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Footer from './components/Footer/Footer.jsx';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Footer></Footer>
    </>
  )
}

export default App
