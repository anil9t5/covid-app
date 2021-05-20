import { components } from "react-select"
const { Option } = components
import styles from "../../styles/FlexStyles.module.css"

const CountriesListData = (props) => {
  return (
    <Option {...props}>
      <div
        data-cy={props.data.country}
        className={[styles.flexDirRow, styles.spaceBetween].join(" ")}>
        <div className="country-details">
          <div className="image-container">
            <img src={props.data.countryInfo.flag} alt="" />
          </div>
          <span className={styles.alignItemSelfCenter}>
            {props.data.country}
          </span>
        </div>
        <h5 className={styles.alignItemSelfCenter}>{props.data.cases}</h5>
      </div>
      <style jsx>{`
        .country-details {
          display: flex;
          text-align: left;
          justify-content: flex-start;
          position: relative;
          span {
            padding-left: 12px;
          }
          .image-container {
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 50%;
            border: 1px solid #ececf0;
          }
          img {
            width: 100%;
            height: 100%;
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
