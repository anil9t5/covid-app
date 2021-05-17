import { EntypoHome } from "react-entypo"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light navbar-transparent navbar-custom">
        <div className="container">
          <a className="navbar-brand font-weight-bold" href="#">
            <img
              src="./images/virus.png"
              alt=""
              width="auto"
              height="25"
              class="d-inline-block align-text-top"
            />
            &nbsp; Covid-19 Alert
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-md-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
