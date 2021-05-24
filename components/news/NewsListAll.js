import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { fetchAllNews } from "../../redux/actions/newsAction"
import { EntypoArrowLongLeft } from "react-entypo"
import Link from "next/link"
import { useRouter } from "next/router"
import Moment from "react-moment"
import { Scrollbars } from "rc-scrollbars"
import styles from "../../styles/FlexStyles.module.css"

const NewsListAll = ({ news_list }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    dispatch(fetchAllNews())
  }, [])

  const goBack = () => {
    dispatch({ type: "TOGGLE_OVERVIEW", payload: false })
  }
  const checkoutNews = (data) => {
    router.push({
      pathname: `news`,
      query: {
        title: data.title,
        url: data.urlToImage,
        publishedAt: data.publishedAt,
        source: data.source["name"],
        content: data.content,
        author: data.author,
      },
    })
  }
  return (
    <div>
      <div className={[styles.flexDirRow, styles.spaceBetween].join(" ")}>
        <h1>News</h1>
        <h5 className="btn-back" onClick={goBack}>
          <span>
            <EntypoArrowLongLeft />
          </span>{" "}
          Back
        </h5>
      </div>
      <div className="row">
        <Scrollbars style={{ width: "100%", height: 750 }}>
          {news_list.length > 0 &&
            news_list.map((data) => (
              <div className="col-md-3">
                <Link
                  as={`/news/${data.title}`}
                  href={{
                    pathname: "/news",
                    query: {
                      title: data.title,
                      url: data.urlToImage,
                      publishedAt: data.publishedAt,
                      source: data.source["name"],
                      content: data.content,
                      author: data.author,
                    },
                  }}>
                  <div id={data.title} className="news-section">
                    <div className="news-image-box">
                      {data.urlToImage == null ||
                      data.urlToImage == "/Static/img/tasnim-main-logo.jpg" ? (
                        <img src="./images/no_result_found.png" alt="image" />
                      ) : (
                        <img src={data.urlToImage} alt="image" />
                      )}
                    </div>
                    <div className="news-content">
                      <h6>{data.title}</h6>
                      <span>{data.source["name"]}</span>
                      <div className="timestamp">
                        <i className="fa fa-calendar-o" aria-hidden="true" />
                        &nbsp;
                        <Moment fromNow>{data.publishedAt}</Moment>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </Scrollbars>
      </div>
      <style jsx>{`
        .news-section {
          cursor: pointer;
          overflow: hidden;
          border: 1px solid #e2ebff;
          border-radius: 15px;
          background-color: #ffffff;
          margin: 8px;
          h6 {
            font-weight: normal;
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
        .news-image-box {
          overflow: hidden;
          height: 120px;
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
        :global(.rc-scrollbars-view) {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    news_list: state.newsList.news_list,
  }
}

export default connect(mapStateToProps)(NewsListAll)
