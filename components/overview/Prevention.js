import styles from "../../styles/FlexStyles.module.css"

const Prevention = () => {
  return (
    <div className="content">
      <h5>Symptoms & Prevention</h5>
      <div
        className={[
          "prevention-steps-section",
          styles.flexDirRow,
          styles.spaceAround,
          styles.flexWrap,
        ].join(" ")}>
        <div>
          <div className="image-box">
            <img src="./images/prevention/prevention_01.png" alt="" />
          </div>
          <span>Use Mask</span>
        </div>
        <div>
          <div className="image-box">
            <img src="./images/prevention/prevention_02.png" alt="" />
          </div>
          <span>Disinfection</span>
        </div>
        <div>
          <div className="image-box">
            <img src="./images/prevention/fever.png" alt="" />
          </div>
          <span>Fever</span>
        </div>
        <div>
          <div className="image-box">
            <img src="./images/prevention/prevention_04.png" alt="" />
          </div>
          <span>Quarantine</span>
        </div>
        <div>
          <div className="image-box">
            <img src="./images/prevention/cough.png" alt="" />
          </div>
          <span>Cough</span>
        </div>
        <div>
          <div className="image-box">
            <img src="./images/prevention/prevention_06.png" alt="" />
          </div>
          <span>Distance</span>
        </div>
      </div>
      <style jsx>{`
        .content {
          padding-left: 6px;
        }
        .prevention-steps-section {
          padding: 15px;
          border-radius: 30px;
          border: 1px solid #e2ebff;
          background-color: #ffffff;
          overflow: hidden;
          text-align: center;
          span {
            font-size: 12px;
            color: #7c98c4;
          }
          .image-box {
            width: 70px;
            height: 70px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
        }
      `}</style>
    </div>
  )
}

export default Prevention
