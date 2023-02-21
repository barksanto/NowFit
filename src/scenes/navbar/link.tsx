import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types"
// Whenever there are props for a component it is a good idea to define them as a type

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

function link({page, selectedPage, setSelectedPage}: Props) {
  // as, treats this as a SelectedPage enum
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-300 hover:text-primary-300`} // Ternary for conditional styling
      href={`#${lowerCasePage}`}
      onClick = {() => lowerCasePage}
    >
      {page}
    </AnchorLink>
  )
}

export default link