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
          border: 1px solid #e2ebff;
          padding: 15px;
          width: 180px;
          height: auto;
          margin-top: 10px;
          span {
            font-size: 14px;
            color: #7c98c4;
          }
        }
        .overview-box-bg-light {
          background-color: #ffffff;
        }
        .text-purple {
          color: #30357c;
          font-size: 18px;
        }
        .icon-wrapper {
          background: #ebebf7;
          border-radius: 50%;
          padding: 7px 8px;
          height: 40px;
          width: 40px;
        }
        .icon-color {
          color: #30357c;
        }
      `}</style>
    </div>
  )
}

export default Recovered
