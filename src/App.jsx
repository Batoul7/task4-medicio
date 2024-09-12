import './App.css'
import About from './components/About/About'
import Appointment from './components/Appointment/Appointment'
import Contact from './components/Contact/Contact'
import Departments from './components/Departments/Departments'
import Doctors from './components/Doctors/Doctors'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Help from './components/Help/Help'
import Hero from './components/Hero/Hero'
import Pricing from './components/Pricing/Pricing'
import Questions from './components/Questions/Questions'
import Services from './components/ServicesSection/Services'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Featured />
      <Help/>
      <About/>
      <Services/>
      <Appointment/>
      <Departments/>
      <Testimonials/>
      <Doctors/>
      <Gallery/>
      <Pricing/>
      <Questions/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
