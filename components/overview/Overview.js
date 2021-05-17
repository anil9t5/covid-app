import ActiveCases from "./ActiveCases"
import Recovered from "./Recovered"
import TotalCases from "./TotalCases"
import TotalDeaths from "./TotalDeaths"
import styles from "../../styles/flexStyles.module.css"
import Chart from "./Chart"
import MapChart from "./MapChart"

const Overview = () => {
  return (
    <>
      <div className="row">
        <div className={["col-md-5", styles.flexContent].join(" ")}>
          <div
            className={[
              styles.flexDirRow,
              styles.flexWrap,
              styles.spaceAround,
            ].join(" ")}>
            <TotalCases />
            <TotalDeaths />
            <ActiveCases />
            <Recovered />
          </div>
        </div>
        <div className="col-md-7">
          <MapChart />
        </div>
      </div>
      <Chart />
    </>
  )
}

export default Overview
