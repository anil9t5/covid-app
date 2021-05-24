import CountryList from "./CountryList"
import flexStyles from "../../styles/FlexStyles.module.css"

const Sidebar = () => {
  return (
    <div className={flexStyles.flexDirCol}>
      <CountryList />
    </div>
  )
}

export default Sidebar
