import styles from "../../styles/flexStyles.module.css"

const TotalDeaths = () => {
  return (
    <div
      className={[
        "overview-box overview-box-red",
        styles.justifyCenter,
        styles.flexDirCol,
      ].join(" ")}>
      <div className={[styles.flexDirRow, styles.spaceAround].join(" ")}>
        <h4 className="icon-wrapper">
          <i className="fa fa-user icon-color" aria-hidden="true" />
          <i className="fa fa-times icon-color icon-times" aria-hidden="true" />
        </h4>
        <div className={styles.flexDirCol}>
          <span>Total Deaths</span>
          <h5 className="text-red font-weight-bold">89,000</h5>
        </div>
      </div>
      <style jsx>{`
        .overview-box {
          border-radius: 20px;
          padding: 15px;
          width: 180px;
          height: auto;
          span {
            font-size: 14px;
          }
        }
        .overview-box-red {
          background-color: #fef0e9;
        }

        .icon-wrapper {
          background: #fcdac9;
          position: relative;
          border-radius: 50%;
          padding: 9px 12px;
          height: 45px;
          width: 45px;
        }
        .icon-color {
          color: #f55730;
        }
        .text-red {
          color: #f55730;
          font-size: 20px;
        }
        .icon-times {
          font-size: 8px;
          right: 13px;
          top: 10px;
          position: absolute;
        }
      `}</style>
    </div>
  )
}

export default TotalDeaths
