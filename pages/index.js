import Overview from "../components/overview/Overview"
import Sidebar from "../components/sidebar/Sidebar"
import { useEffect } from "react"
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { toggleOverviewAction } from "../redux/actions/toggleAction"
import NewsListAll from "../components/news/NewsListAll"
function Home({ toggleOverview }) {
  console.log("Value: ", toggleOverview)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(toggleOverviewAction())
  }, [])
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar />
      </div>
      <div className="col-lg-9">
        {toggleOverview === true ? <NewsListAll /> : <Overview />}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    toggleOverview: state.toggle.toggleOverview,
  }
}
export default connect(mapStateToProps)(Home)
