import { useEffect } from "react"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchAllNews, newsDetailsAction } from "../redux/actions/newsAction"
import {
  toggleOverviewAction,
  toggleNewsAction,
} from "../redux/actions/toggleAction"
import NewsListAll from "../components/news/NewsListAll"
import Overview from "../components/overview/Overview"
import Sidebar from "../components/sidebar/Sidebar"
import NewsInner from "../components/news/NewsInner"

function Home({ news_list, toggleOverview, checkoutNews, newsDetails }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllNews())
    dispatch(toggleOverviewAction())
    dispatch(toggleNewsAction())
    dispatch(newsDetailsAction())
  }, [])

  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar />
      </div>
      <div className="col-lg-9">
        {toggleOverview === true ? (
          <NewsListAll news_list={news_list} />
        ) : checkoutNews === true ? (
          <NewsInner newsDetail={newsDetails} />
        ) : (
          <Overview />
        )}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    news_list: state.newsList.news_list,
    toggleOverview: state.toggle.toggleOverview,
    checkoutNews: state.checkout.newsItemCheckout,
    newsDetails: state.newsDetail.news_details,
  }
}
export default connect(mapStateToProps)(Home)
