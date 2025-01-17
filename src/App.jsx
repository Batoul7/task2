
import './App.css'
import Contact from './components/Contact/Contact'
import Deal from './components/Deal/Deal'
import Featured from './components/Featured/Featured'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Properties from './components/Properties/Properties'
import Video from './components/VideoView/Video'


function App() {

  return(
    <>
    <Header/>
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
