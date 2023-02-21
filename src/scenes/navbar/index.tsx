import { useState } from "react";
import { Bars3Icon, XMarkIcon, FireIcon } from '@heroicons/react/24/solid';
import Logo from "@/assets/Logo.png";
import Link from "./link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import NowFitLogo from "@/assets/nowfitlogo.png"


// Wherever selectedPage, setSelectedPage are used, they are passed as props
type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
}

const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); 
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow" // works if reversed returns 
  console.log(navbarBackground)
  return <nav>
    <div
      className={`${flexBetween} fixed top-0 z-30 w-full py-6 ${navbarBackground}` }
    >
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* Left side */}
          {/* <img src={NowFitLogo} alt="logo"className="h-20 w-36"/> */}
          <div className="flex justify-center border-2 rounded-full p-3"> 
            <span style={{fontFamily: "Montserrat"}}>NowFit<FireIcon color="purple"></FireIcon></span>
          </div>
          
          {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
            {/* Right side */}
            <div className={`${flexBetween} gap-8 text-sm`}> {/* Links */}
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>

            <div className={`${flexBetween} gap-8`}>  {/* Sign In and Become a Member */}
              <p>Sign in</p>
              <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
            </div>
              
          </div>)
            :
            (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon
                  className="h-6 w-6 text-white"
                />
              </button>
            )}
        </div>
      </div>
    </div>
    {/* Mobile menu modal */}
    {!isAboveMediumScreens && isMenuToggled &&(
      <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
        {/* Close Icon */}
        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <XMarkIcon className="h-6 w-6 gray-400" />
          </button>
        </div>
        {/* Menu Items */}
        <div className="ml-[33%] flex flex-col gap-10 text-2xl"> {/* Links */}
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          </div>
      </div>
    )}
  </nav>
}

export default Navbar