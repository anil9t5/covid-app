import React, { useState, useEffect } from "react"
import ActiveCases from "./ActiveCases"
import Recovered from "./Recovered"
import TotalCases from "./TotalCases"
import TotalDeaths from "./TotalDeaths"
import Chart from "./Chart"
import MapChart from "./MapChart"
import { connect } from "react-redux"
import { useDispatch, useSelector } from "react-redux"
import { fetchOverview } from "../../redux/actions/overviewAction"

import styles from "../../styles/FlexStyles.module.css"
const Overview = ({ overviews }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOverview())
  }, [])
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
            <TotalCases styles={styles} cases={overviews.cases} />
            <TotalDeaths styles={styles} deaths={overviews.deaths} />
            <ActiveCases styles={styles} active={overviews.active} />
            <Recovered styles={styles} recovered={overviews.recovered} />
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

const mapStateToProps = (state) => {
  return {
    overviews: state.overview.overviews,
  }
}
export default connect(mapStateToProps)(Overview)
