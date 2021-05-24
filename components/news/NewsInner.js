import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { EntypoArrowLongLeft } from "react-entypo"
import Moment from "react-moment"
import styles from "../../styles/FlexStyles.module.css"

const NewsInner = ({ newsDetail }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { query } = router
  const goBack = () => {
    dispatch({
      type: "NEWS_ITEM_CHECKOUT",
      payload: false,
    })
    dispatch({ type: "TOGGLE_OVERVIEW", payload: true })
    router.push("/?news")
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className={[styles.flexDirRow, styles.spaceBetween].join(" ")}>
            <h1>News </h1>
            <h5 className="btn-back" onClick={goBack}>
              <span>
                <EntypoArrowLongLeft />
              </span>{" "}
              Back
            </h5>
          </div>
          <div className="news-container">
            <div className="image-container">
              {newsDetail.url == null ||
              newsDetail.url ==
                "https://nfw.ria.ru/flv/file.aspx?ID=59496079&type=mp3" ? (
                <img src="./images/no_result_found.png" alt="image" />
              ) : (
                <img src={newsDetail.url} alt="image" />
              )}
            </div>
            <div className="news-content">
              <h4>{newsDetail.title}</h4>
              <span>Category: {newsDetail.category}</span>
              <div className="timestamp">
                <i className="fa fa-calendar-o" aria-hidden="true" />
                &nbsp;
                <Moment fromNow>{newsDetail.date}</Moment>
              </div>
              <p>{newsDetail.content}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .news-container {
          overflow: hidden;
          border: 1px solid #e2ebff;
          border-radius: 15px;
          background-color: #ffffff;
          .image-container {
            width: 100%;
            height: 500px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .news-content {
            padding: 20px;
          }
        }
        .btn-back {
          cursor: pointer;
          margin-bottom: 0px;
          display: flex;
          align-items: center;
          span {
            padding-top: 5px;
            padding-right: 5px;
          }
        }
        .timestamp {
          font-size: 12px;
          margin-top: 10px;
          margin-bottom: 15px;
        }
      `}</style>
    </div>
  )
}

export default NewsInner
