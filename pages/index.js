import Overview from "../components/overview/Overview"
import Sidebar from "../components/sidebar/Sidebar"

export default function Home() {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar />
      </div>
      <div className="col-lg-9">
        <Overview />
      </div>
    </div>
  )
}
