const TotalDeaths = ({ styles, deaths }) => {
  return (
    <div
      className={[
        "overview-box overview-box-red",
        styles.justifyCenter,
        styles.flexDirCol,
      ].join(" ")}>
      <div className={[styles.flexDirCol, styles.spaceAround].join(" ")}>
        <h4 className="icon-wrapper">
          <i className="fa fa-user icon-color" aria-hidden="true" />
          <i className="fa fa-times icon-color icon-times" aria-hidden="true" />
        </h4>
        <div className={styles.flexDirCol}>
          <span>Total Deaths</span>
          <h3 className="text-light font-weight-bold">{deaths}</h3>
        </div>
      </div>
      <style jsx>{`
        .overview-box {
          border-radius: 30px;
          border: 1px solid #ececf0;
          padding: 15px;
          width: 180px;
          height: auto;
          span {
            color: #ffffff;
            font-size: 14px;
          }
        }
        .overview-box-red {
          background-color: #f782ac;
        }

        .icon-wrapper {
          background: rgba(255, 255, 255, 0.75);
          position: relative;
          border-radius: 50%;
          padding: 7px 11px;
          height: 40px;
          width: 40px;
        }
        .icon-color {
          color: #f782ac;
        }
        .text-light {
          color: #fbfbfb;
        }
        .icon-times {
          font-size: 8px;
          right: 8px;
          top: 10px;
          position: absolute;
        }
      `}</style>
    </div>
  )
}

export default TotalDeaths
