import { useRouter } from "next/router"
const news = () => {
  const router = useRouter()
  const { query } = router
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h4>{query.title}</h4>
          <p>{query.content}</p>
        </div>
      </div>
    </div>
  )
}

export default news
