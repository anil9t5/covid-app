import CountryList from "./CountryList"
import Symptoms from "./Symptoms"
import flexStyles from "../../styles/FlexStyles.module.css"

const Sidebar = () => {
  return (
    <div className={flexStyles.flexDirCol}>
      <CountryList />
      <Symptoms />
    </div>
  )
}

export default Sidebar
