const ActiveCases = ({ styles, active }) => {
  return (
    <div
      className={[
        "overview-box overview-box-green",
        styles.justifyCenter,
        styles.flexDirCol,
      ].join(" ")}>
      <div className={[styles.flexDirRow, styles.spaceAround].join(" ")}>
        <h3 className="icon-wrapper">
          <i className="fa fa-dot-circle-o icon-color" aria-hidden="true" />
        </h3>
        <div className={styles.flexDirCol}>
          <span>Active Cases</span>
          <h5 className="text-green font-weight-bold">{active}</h5>
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
        .overview-box-green {
          background-color: #e2f6e9;
        }
        .text-green {
          color: #429b5e;
          font-size: 18px;
        }
        .icon-wrapper {
          background: #c3e8d1;
          border-radius: 50%;
          padding: 6px 10px;
          height: 40px;
          width: 40px;
        }
        .icon-color {
          color: #429b5e;
        }
      `}</style>
    </div>
  )
}

export default ActiveCases
