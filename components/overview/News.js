import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import Moment from "react-moment"
import styles from "../../styles/FlexStyles.module.css"

const News = ({ news }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const toggleComponent = () => {
    dispatch({ type: "TOGGLE_OVERVIEW", payload: true })
    router.push("/?news")
  }

  const checkoutNews = (data) => {
    dispatch({ type: "TOGGLE_OVERVIEW", payload: false })
    dispatch({
      type: "NEWS_ITEM_CHECKOUT",
      payload: true,
    })
    dispatch({
      type: "NEWS_DETAILS",
      payload: {
        title: data.title,
        url: data.image,
        category: data.category,
        content: data.description,
      },
    })
    router.push("/?news_details")
  }

  return (
    <>
      <h5>Latest News</h5>
      <div className={["news-section", styles.flexDirRow].join(" ")}>
        <div className="news-image-box">
          {news.image == null ||
          news.image ==
            "https://nfw.ria.ru/flv/file.aspx?ID=59496079&type=mp3" ? (
            <img src="./images/no_result_found.png" alt="image" />
          ) : (
            <img src={news.image} alt="image" />
          )}
        </div>
        <div
          className={[
            "news-content",
            styles.flexDirCol,
            styles.spaceAround,
          ].join(" ")}>
          <h5
            className="title font-weight-bold"
            onClick={() => checkoutNews(news)}>
            {news.title}
          </h5>
          <span>Category: {news.category}</span>

          <div className="timestamp">
            <i className="fa fa-calendar-o" aria-hidden="true" />
            &nbsp;&nbsp;
            <Moment fromNow>{news.published_at}</Moment>
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
            .title {
              cursor: pointer;
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
