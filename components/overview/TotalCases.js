import styles from "../../styles/flexStyles.module.css"
import { EntypoNetwork } from "react-entypo"

const TotalCases = () => {
  return (
    <div
      className={[
        "overview-box overview-box-blue",
        styles.justifyCenter,
        styles.flexDirCol,
      ].join(" ")}>
      <div className={[styles.flexDirRow, styles.spaceAround].join(" ")}>
        <h3 className="icon-wrapper">
          {/* <i className="fa fa-globe icon-color" aria-hidden="true" /> */}
          <EntypoNetwork className="icon-color" />
        </h3>
        <div className={styles.flexDirCol}>
          <span>Total Cases</span>
          <h5 className="text-blue font-weight-bold">1,450,900</h5>
        </div>
      </div>
      <style jsx>{`
        .overview-box {
          border-radius: 20px;
          padding: 15px;
          /*border: 1px solid #ebeaf0;*/
          width: 180px;
          height: auto;
          span {
            font-size: 14px;
          }
        }

        .overview-box-blue {
          background-color: #e5f6ff;
        }
        .icon-wrapper {
          background: #b7e6ff;
          border-radius: 50%;
          padding: 9px 11px;
          height: 45px;
          width: 45px;
        }
        .text-blue {
          color: #2c71ff;
          font-size: 20px;
        }
        :global(.icon-color) {
          color: #2c71ff;
        }
      `}</style>
    </div>
  )
}

export default TotalCases
