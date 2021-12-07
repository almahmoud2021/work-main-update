import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { About } from './components/about'
import { Partners } from './components/partners'
import {  Services } from './components/services'
import { Contact } from './components/contact'
import translationEN from "./locale/en.json"  ///
import translationAR from "./locale/ar.json" ///
import { useTranslation } from 'react-i18next'; //for lan added
import SmoothScroll from 'smooth-scroll'
import { Industries } from './components/industries'
import Home from "./components/Home";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";  ////



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})




const App = () => {

  const { i18n } = useTranslation(); //for lan added


  const [landingPageData, setLandingPageData] = useState({}) 



  useEffect(() => {
    if(i18n.language === 'en')
      return;
        setLandingPageData(translationAR) 
  }, [i18n.language])
  useEffect(() => {
    if(i18n.language === 'ar') 
      return;
        setLandingPageData(translationEN) 
  }, [i18n.language])




  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      
      <Home />

      <Services data={landingPageData.Services} />  
      <Industries data={landingPageData.Industries}/>
     
       <Partners /> 

      <About data={landingPageData.About} />
      <Contact data={landingPageData.Contact} />   
      </div>
    )




}

export default App



  // hook can't be used nested, like inside a if statement

// hooks | react


