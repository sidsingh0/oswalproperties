import Link from "next/link";
import { Navbar } from "react-bootstrap";
import { MdOutlineMailOutline, MdCall } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navbar className="p-0" bg="none" expand="lg">
          <Link className="navbar-brand" href="/">
            {/* <h2 className="logo">Oswal.</h2> */}
            <img
                src="/images/oswallogo.png"
                alt="wChoose"
                className="img-fluid"
                height="50"
                style={{height:"50px",zIndex:"1000000",display:"block",padding:"10px"}}
              />
          </Link>
          <Navbar.Toggle
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="togler-icon-inner">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="collapse navbar-collapse main-menu pg-scroll justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/all-property">
                  All Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>

          <ul className="navbar-nav navbar__right d-none d-lg-flex gap-2">
            {/* Contact Cta Button */}
            <li>
              <Link href="/contact" className="button-secondary">
                Contact us
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
