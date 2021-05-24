import { components } from "react-select"
import NumberFormat from "react-number-format"
const { Option } = components
import styles from "../../styles/FlexStyles.module.css"

const CountriesListData = (props) => {
  return (
    <Option {...props}>
      <div className={[styles.flexDirRow, styles.spaceBetween].join(" ")}>
        <div className="country-details">
          <div className="image-container">
            <img src={props.data.flag} alt="" />
          </div>
          <span className={styles.alignItemSelfCenter}>{props.data.label}</span>
        </div>
        <h5 className={styles.alignItemSelfCenter}>
          <NumberFormat
            value={props.data.cases}
            displayType={"text"}
            thousandSeparator={true}
          />
          <span> cases</span>
        </h5>
      </div>
      <style jsx>{`
        .country-details {
          display: flex;
          text-align: left;
          justify-content: flex-start;
          position: relative;
          span {
            padding-left: 12px;
            color: #5b73a0;
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
          font-size: 16px;
          font-weight: bold;
          margin-bottom: 0;
          span {
            font-size: 11px;
            font-weight: 400;
            color: #5b73a0 !important;
          }
        }
      `}</style>
    </Option>
  )
}

export default CountriesListData
