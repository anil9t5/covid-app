const Recovered = ({ styles, recovered }) => {
  return (
    <div
      className={[
        "overview-box overview-box-bg-purple",
        styles.justifyCenter,
        styles.flexDirCol,
      ].join(" ")}>
      <div className={[styles.flexDirRow, styles.spaceAround].join(" ")}>
        <h3 className="icon-wrapper">
          <i className="fa fa-heartbeat icon-color" aria-hidden="true" />
        </h3>
        <div className={styles.flexDirCol}>
          <span>Recovered</span>
          <h5 className="text-purple font-weight-bold">{recovered}</h5>
        </div>
      </div>
      <style jsx>{`
        .overview-box {
          border-radius: 20px;
          padding: 10px;
          width: 180px;
          height: auto;
          margin-top: 10px;
          span {
            font-size: 14px;
          }
        }
        .overview-box-bg-purple {
          background-color: #f6f3ff;
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
