const Recovered = ({ styles, recovered }) => {
  return (
    <div
      className={[
        "overview-box overview-box-bg-light",
        styles.justifyCenter,
        styles.flexDirCol,
      ].join(" ")}>
      <div className={[styles.flexDirCol, styles.spaceAround].join(" ")}>
        <h3 className="icon-wrapper">
          <i className="fa fa-heartbeat icon-color" aria-hidden="true" />
        </h3>
        <div className={styles.flexDirCol}>
          <span>Recovered Cases</span>
          <h3 className="font-weight-bold">{recovered}</h3>
        </div>
      </div>
      <style jsx>{`
        .overview-box {
          border-radius: 30px;
          border: 1px solid #ececf0;
          padding: 15px;
          width: 180px;
          height: auto;
          margin-top: 10px;
          span {
            font-size: 14px;
            color: #666666;
          }
        }
        .overview-box-bg-light {
          background-color: #ffffff;
        }
        .text-purple {
          color: #604bba;
          font-size: 18px;
        }
        .icon-wrapper {
          background: #d9d3ff;
          border-radius: 50%;
          padding: 7px 8px;
          height: 40px;
          width: 40px;
        }
        .icon-color {
          color: #604bba;
        }
      `}</style>
    </div>
  )
}

export default Recovered
