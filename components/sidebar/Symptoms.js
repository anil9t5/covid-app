import React from "react"
import styles from "../../styles/FlexStyles.module.css"
const Symptoms = () => {
  return (
    <div
      className={[styles.flexDirRow, styles.spaceBetween, "content"].join(" ")}>
      <div className="avatar-box">
        <img
          className="avatar-image"
          src="./images/mask.png"
          alt="wearing-mask"
        />
      </div>
      <div className={styles.flexDirCol}>
        <h6 className="font-weight-bold">Symptoms of Covid-19</h6>
        <span>COVID-19 is an infectious disease.</span>
        <div className="btn-box">
          <button className="btn btn-success btn-rounded">Read More</button>
        </div>
      </div>
      <style jsx>{`
        .content {
          position: relative;
          background: #c3e8d1;
          border-radius: 15px;
          padding: 20px 12px;
          span {
            font-size: 12px;
          }
        }
        .avatar-box {
          background-color: #ffffff;
          width: 60px;
          height: 60px;
          overflow: hidden;
          border-radius: 50%;
        }
        .avatar-image {
          margin-top: 6px;
          height: 60px;
        }
        .btn-box {
          margin-top: 5px;
        }
        .btn-rounded {
          background-color: #429b5e;
          border-radius: 25px;
          border: 0px;
          font-size: 11px !important;
        }
      `}</style>
    </div>
  )
}

export default Symptoms
