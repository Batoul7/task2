
import './App.css'
import Contact from './components/Contact/Contact'
import Deal from './components/Deal/Deal'
import Featured from './components/Featured/Featured'
import HeaderTop from './components/Header/HeaderTop'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import Properties from './components/Properties/Properties'
import Video from './components/VideoView/Video'


function App() {

  return(
    <>
    <HeaderTop/>
    <NavBar/>
    <Hero page={true}/>
    <Featured/>
    <Video/>
    <Deal/>
    <Properties/>
    <Contact/>
    </>
  )
}

export default App
