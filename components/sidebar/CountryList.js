import React, { useEffect } from "react"
import Select from "react-select"
import { connect } from "react-redux"
import { useDispatch, useSelector } from "react-redux"
import { components } from "react-select"
import CountriesListData from "./CountriesListData"
import { fetchCountries } from "../../redux/actions/countriesAction"
const { Option } = components

const CountryList = ({ countries }) => {
  let count = 0
  const countriesValue = countries.map((data) => ({
    label: data.country,
    value: data.country.toLowerCase(),
    cases: data.cases,
    flag: data.countryInfo.flag,
  }))

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCountries())
  }, [])
  return (
    <>
      <Select
        value="Select"
        instanceId={count + 1}
        className="scrollableList"
        options={countriesValue}
        components={{ Option: CountriesListData }}
        menuIsOpen={true}
      />
      <style jsx>{`
        :global(.scrollableList) {
          box-shadow: 10px 5px 25px rgba(48, 53, 124, 0.05);
          margin-bottom: 25px;
          border-radius: 20px;
        }
        :global(.scrollableList .css-26l3qy-menu) {
          background-color: #ffffff;
          position: relative !important;
          box-shadow: 0px !important;
          box-shadow: none !important;

          border-radius: 0px 0px 20px 20px;
          overflow: hidden;
          margin-top: 0px;
          margin-bottom: 0px;
          border-top: 0px;
          font-size: 14px;
        }
        :global(.scrollableList .css-4ljt47-MenuList) {
          max-height: 500px !important;
        }
        :global(.css-9gakcf-option) {
          background-color: #ffffff !important;
          color: #26223e !important;
        }
        :global(.css-1n7v3ny-option) {
          background: none !important;
        }

        :global(.css-1pahdxg-control) {
          padding: 8px !important;
          border: 0px !important;
          border-radius: 20px 20px 0px 0px !important;
          -webkit-box-shadow: none !important;
          -moz-box-shadow: none !important;
          box-shadow: none !important;
          font-size: 14px !important;
        }
        :global(.css-yk16xz-control) {
          padding: 5px;
          border: 0px !important;
          border-radius: 20px 20px 0px 0px !important;
          border-bottom: 0px;
          font-size: 14px;

          border-bottom: 0px !important;
        }
        :global(.css-1okebmr-indicatorSeparator) {
          display: none !important;
        }
        :global(.css-1gtu0rj-indicatorContainer) {
          display: none !important;
        }
        :global(.css-tlfecz-indicatorContainer) {
          :global(svg) {
            display: none !important;
          }
        }
        :global(.css-g1d714-ValueContainer) {
          overflow: visible !important;
          margin: 5px !important;
        }
        :global(.css-1wa3eu0-placeholder, .css-b8ldur-Input, .css-gg45go-NoOptionsMessage) {
          color: #5b73a0 !important;
        }
        :global(.css-tlfecz-indicatorContainer:before) {
          font-family: FontAwesome;
          content: "\f002";
          color: #26223e;
        }
      `}</style>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    countries: state.country.countries,
  }
}
export default connect(mapStateToProps)(CountryList)
