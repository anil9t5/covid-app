import { useRouter } from "next/router"
const news = () => {
  const router = useRouter()
  const { query } = router
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="news-container">
            <div className="image-container">
              <img src={query.url} alt="image" />
            </div>
            <div className="news-content">
              <h4>{query.title}</h4>
              <span>{query.category}</span>
              <p>{query.content}</p>
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
            height: 600px;
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
      `}</style>
    </div>
  )
}

export default news
