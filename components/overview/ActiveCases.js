import styles from "../../styles/flexStyles.module.css"

const ActiveCases = () => {
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
          <h5 className="text-green font-weight-bold">550,500</h5>
        </div>
      </div>
      <style jsx>{`
        .overview-box {
          border-radius: 20px;
          padding: 15px;
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
          font-size: 20px;
        }
        .icon-wrapper {
          background: #c3e8d1;
          border-radius: 50%;
          padding: 8px 12px;
          height: 45px;
          width: 45px;
        }
        .icon-color {
          color: #429b5e;
        }
      `}</style>
    </div>
  )
}

export default ActiveCases
