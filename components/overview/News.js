import React from "react"
import styles from "../../styles/FlexStyles.module.css"
const News = ({ news }) => {
  let imageUrl = ""
  for (let i in news.images) {
    imageUrl = news.images[i].url
  }

  return (
    <>
      <h5>Latest News</h5>
      <div className={["news-section", styles.flexDirRow].join(" ")}>
        <div className="news-image-box">
          <img src={imageUrl} alt="" />
        </div>
        <div
          className={[
            "news-content",
            styles.flexDirCol,
            styles.spaceAround,
          ].join(" ")}>
          <h6>{news.title}</h6>
          {/* <span>{news.excerpt}</span> */}
          <div className="btn-section">
            <button className="btn btn-success btn-rounded">View All</button>
          </div>
        </div>
        <style jsx>{`
          .news-section {
            overflow: hidden;
            border: 1px solid #e2ebff;
            border-radius: 30px;

            background-color: #ffffff;
            span {
              color: #7c98c4;
              font-size: 13px;
            }
          }

          .news-image-box {
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .news-content {
            padding: 20px;
            .btn-section {
              margin-top: 10px;
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default News
