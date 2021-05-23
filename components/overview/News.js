import { useDispatch } from "react-redux"
import Moment from "react-moment"
import styles from "../../styles/FlexStyles.module.css"

const News = ({ news }) => {
  const dispatch = useDispatch()

  const toggleComponent = () => {
    dispatch({ type: "TOGGLE_OVERVIEW", payload: true })
  }
  let source = ""
  for (let i in news) {
    if (news.source !== null) {
      source = news.source["name"]
    }
  }

  return (
    <>
      <h5>Latest News</h5>
      <div className={["news-section", styles.flexDirRow].join(" ")}>
        <div className="news-image-box">
          {news.urlToImage ? (
            <img src={news.urlToImage} alt="image" />
          ) : news.urlToImage !== null ? (
            <img className="loading" src="./images/loading.gif" alt="image" />
          ) : (
            <img src="./images/no_result_found.png" alt="image" />
          )}
        </div>
        <div
          className={[
            "news-content",
            styles.flexDirCol,
            styles.spaceAround,
          ].join(" ")}>
          <h5 className="font-weight-bold">{news.title}</h5>
          <span>Source: {source}</span>

          <div className="timestamp">
            <i className="fa fa-calendar-o" aria-hidden="true" />
            &nbsp;&nbsp;
            <Moment fromNow>{news.publishedAt}</Moment>
          </div>
          <div className="btn-section">
            <button
              className="btn btn-success btn-rounded"
              onClick={toggleComponent}>
              View All
            </button>
          </div>
        </div>
        <style jsx>{`
          .news-section {
            overflow: hidden;
            border: 1px solid #e2ebff;
            border-radius: 30px;
            height: 215px;
            background-color: #ffffff;
            h5 {
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 3; /* number of lines to show */
              -webkit-box-orient: vertical;
            }
            span {
              color: #7c98c4;
              font-size: 13px;
            }
          }
          .timestamp {
            font-size: 12px;
          }
          .news-image-box {
            width: 500px;
            height: 215px;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .news-content {
            width: 100%;
            padding: 20px;
            .btn-section {
              margin-top: 10px;
            }
          }
          .loading {
            width: 80px !important;
            height: 80px !important;
            position: absolute;
            top: 30%;
            left: 35%;
          }
        `}</style>
      </div>
    </>
  )
}

export default News
