import React, { useState, useEffect } from "react"
import ActiveCases from "./ActiveCases"
import Recovered from "./Recovered"
import TotalCases from "./TotalCases"
import TotalDeaths from "./TotalDeaths"
import MapChart from "./MapChart"
import { connect } from "react-redux"
import { useDispatch, useSelector } from "react-redux"
import { fetchNews } from "../../redux/actions/newsAction"
import { fetchOverview } from "../../redux/actions/overviewAction"
import { fetchCountries } from "../../redux/actions/countriesAction"
import styles from "../../styles/FlexStyles.module.css"
import News from "./News"
import Prevention from "./Prevention"
const Overview = ({ overviews, countries, news }) => {
  const countriesValue = countries.map((data) => ({
    country: `${data.countryInfo.iso2}`.toLowerCase(),
    value: data.cases,
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOverview())
    dispatch(fetchCountries())
    dispatch(fetchNews())
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
          <MapChart countriesValue={countriesValue} />
        </div>
      </div>
      <div className="row m-top-30">
        <div className="col-md-4">
          <Prevention />
        </div>
        <div className="col-md-8">
          <News news={news} />
        </div>
        {/* <div className="col-md-4">
          <Prevention />
        </div> */}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    overviews: state.overview.overviews,
    countries: state.country.countries,
    news: state.news.news,
  }
}
export default connect(mapStateToProps)(Overview)
