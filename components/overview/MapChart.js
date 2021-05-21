import { WorldMap } from "react-svg-worldmap"
import styles from "../../styles/FlexStyles.module.css"

const MapChart = ({ countriesValue }) => {
  // const data = [
  //   { country: "cn", value: 10 }, // china
  //   { country: "in", value: 20 }, // india
  //   { country: "us", value: 30 }, // united states
  //   { country: "id", value: 40 }, // indonesia
  //   { country: "pk", value: 50 }, // pakistan
  //   { country: "br", value: 60 }, // brazil
  //   { country: "ng", value: 70 }, // nigeria
  //   { country: "bd", value: 80 }, // bangladesh
  //   { country: "ru", value: 90 }, // russia
  //   { country: "mx", value: 100 }, // mexico
  // ]
  const stylingFunction = (context) => {
    const opacityLevel =
      0.1 +
      (1.5 * (context.countryValue - context.minValue)) /
        (context.maxValue - context.minValue)

    return {
      fill: context.color,
      fillOpacity: opacityLevel,
      stroke: "white",
      strokeWidth: 1,
      strokeOpacity: 1,
      cursor: "pointer",
    }
  }
  return (
    <div className="map-section">
      <div className={["legend-area", styles.flexDirRow].join(" ")}>
        <h6>Affected Countries</h6>
        <div
          className={[styles.flexDirRow, styles.alignItemSelfCenter].join(" ")}>
          <div className="legend moderate">
            <span>Moderate</span>
          </div>
          <div className="legend high">
            <span>&nbsp;&nbsp;&nbsp;High</span>
          </div>
          <div className="legend very-high">
            <span>Very High</span>
          </div>
          <div className="legend highest">
            <span>&nbsp;&nbsp;Highest</span>
          </div>
        </div>
      </div>
      <WorldMap
        color="#2d60ff"
        // value-suffix="people"
        size="lg"
        styleFunction={stylingFunction}
        data={countriesValue}
        strokeOpacity="0.5"
        borderColor="white"
      />
      <style jsx>{`
        .map-section {
          border: 1px solid #e2ebff;
          overflow: hidden;
          text-align: center;
          border-radius: 25px 25px 25px 25px;

          h6 {
            text-align: left;
            background-color: #ffffff;
            margin: 0px;
            padding: 15px 20px;
          }
          .legend-area {
            background-color: #ffffff;
          }
          .legend {
            height: 8px;
            width: 80px;
            position: relative;
            span {
              position: absolute;
              left: 20%;
              top: 8px;
              font-size: 10px;
            }
          }
          .moderate {
            background-color: #eaefff;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          .high {
            background-color: #bbccff;
          }
          .very-high {
            background-color: #567fff;
          }
          .highest {
            background-color: #2d60ff;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
        }
      `}</style>
    </div>
  )
}

export default MapChart
