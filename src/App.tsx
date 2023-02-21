import {useState, useEffect} from 'react'
import Navbar from '@/scenes/navbar'
import { SelectedPage } from '@/shared/types' 
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import OurClasses from '@/scenes/ourClasses'
import ContactUs from "@/scenes/contactUs"
import Footer from "@/scenes/footer"


function App() {
  // This is a type of state that is used to keep track of which page is selected - type is defined in shared/types.ts
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => { 
    const handleScroll = () => { 
      if (window.scrollY === 0) {
        // If the user is at the top of the page, set isTopOfPage to true and set the selectedPage to Home (to ensure we're at the top of the page)
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      } 
      if(window.scrollY !== 0) { // just being more explicit here - can do else as well
        // If the user is not at the top of the page, set isTopOfPage to false
        setIsTopOfPage(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    console.log("isTopOfPage", isTopOfPage)
    return () => window.removeEventListener('scroll', handleScroll)
  },[isTopOfPage]) // isTopOfPage is a dependency because we want to update the state of isTopOfPage when it changes
  
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home
        setSelectedPage={setSelectedPage}
      />
      <Benefits
        setSelectedPage={setSelectedPage}
      />
      <OurClasses
        setSelectedPage={setSelectedPage}
      />
      <ContactUs
        setSelectedPage={setSelectedPage}
      />
      <Footer
      />
    </div>
  )
}

export default App
