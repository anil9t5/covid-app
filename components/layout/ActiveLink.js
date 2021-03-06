import { withRouter } from "next/router"

const ActiveLink = ({ router, href, children }) => {
  const handleClick = (e) => {
    router.push(href)
  }
  const isCurrentPath = router.pathname === href || router.asPath === href
  return (
    <div>
      <a
        className={isCurrentPath ? "nav-link active" : "nav-link"}
        href={href}
        onClick={handleClick}>
        {children}
      </a>
      <style jsx>{`
        .active {
          padding-left: 10px !important;
          padding-right: 10px !important;
          padding-bottom: 0px !important;
          border-radius: 10px !important;
          color: #30357c;
          background-color: #ffffff;
          border: 1px solid #dde5ff;
        }
      `}</style>
    </div>
  )
}

export default withRouter(ActiveLink)
