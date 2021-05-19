import { EntypoNetwork } from "react-entypo"

const TotalCases = ({ styles, cases }) => {
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
          <h5 className="text-blue font-weight-bold">{cases}</h5>
        </div>
      </div>
      <style jsx>{`
        .overview-box {
          border-radius: 20px;
          padding: 10px;
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
          padding: 7px 8px;
          height: 40px;
          width: 40px;
        }
        .text-blue {
          color: #2c71ff;
          font-size: 18px;
        }
        :global(.icon-color) {
          color: #2c71ff;
        }
      `}</style>
    </div>
  )
}

export default TotalCases
