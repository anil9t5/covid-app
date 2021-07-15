import { EntypoNetwork } from "react-entypo"
import NumberFormat from "react-number-format"
const TotalCases = ({ styles, cases }) => {
  return (
    <div
      className={[
        "overview-box overview-box-blue",
        styles.justifyCenter,
        styles.flexDirCol,
      ].join(" ")}>
      <div className={[styles.flexDirCol, styles.spaceAround].join(" ")}>
        <h3 className="icon-wrapper">
          <EntypoNetwork className="icon-color" />
        </h3>
        <div className={styles.flexDirCol}>
          <span>Total Cases</span>
          <h3 className="text-light font-weight-bold">
            <NumberFormat
              value={cases}
              displayType={"text"}
              thousandSeparator={true}
            />
          </h3>
        </div>
      </div>
      <style jsx>{`
        .overview-box {
          border-radius: 30px;
          padding: 15px;
          /*border: 1px solid #ebeaf0;*/
          width: 180px !important;
          height: 160px;
          span {
            color: #ffffff;
            font-size: 14px;
          }
        }

        .overview-box-blue {
          /*background-color: #e5f6ff;*/
          background-color: #30357c;
          border: 1px solid #ececf0;
        }
        .icon-wrapper {
          background: rgba(255, 255, 255, 0.75);
          border-radius: 50%;
          padding: 8px 8px;
          height: 40px;
          width: 40px;
        }
        .text-light {
          color: #fbfbfb;
        }
        :global(.icon-color) {
          color: #30357c;
        }
      `}</style>
    </div>
  )
}

export default TotalCases
