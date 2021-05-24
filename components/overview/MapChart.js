import { WorldMap } from "react-svg-worldmap"
import styles from "../../styles/FlexStyles.module.css"

const MapChart = ({ countriesValue }) => {
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
    <>
      <h5>Affected Countries</h5>
      <div className="map-section">
        <div className={["legend-area", styles.flexDirRow].join(" ")}>
          {/* <h6>Affected Countries</h6> */}
          <div
            className={[styles.flexDirRow, styles.alignItemSelfCenter].join(
              " "
            )}>
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
            position: relative;
            border-radius: 25px 25px 25px 25px;
            padding-top: 20px;
            background-color: #ffffff;

            h6 {
              text-align: left;
              background-color: #ffffff;
              margin: 0px;
              padding: 15px 20px;
            }
            .legend-area {
              background-color: #ffffff;
              position: absolute;
              top: 10px;
              right: 15px;
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
    </>
  )
}

export default MapChart
