import { components } from "react-select"
const { Option } = components
import styles from "../../styles/FlexStyles.module.css"

const CountriesListData = (props) => {
  return (
    <Option {...props}>
      <div
        data-cy={props.data.country}
        className={(styles.flexDirRow, styles.spaceBetween)}>
        {props.data.country}
        <div className="country-icons">
          <img src={props.data.countryInfo.flag} alt="" />
        </div>
        <h5>{props.data.cases}</h5>
      </div>
      <style jsx>{`
        .country-icons {
          width: 100px;
          height: 20px;
          position: relative;
          // text-align: left;
          img {
            width: auto;
            height: auto;
            max-width: 100px;
            max-height: 20px;
            object-fit: cover;
          }
        }
        h5 {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </Option>
  )
}

export default CountriesListData
