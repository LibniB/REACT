import react from "react";
import { Link } from 'react-router-dom'


const NavComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid" >
        <Link to="/HomePage" className="navbar-brand" href="#">L-shoes</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Login" className="nav-link active" aria-current="page" >Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/HomePage" className="nav-link active" aria-current="page" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link active" aria-current="page" >About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/ProductsPage" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Products
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/MenPage" className="dropdown-item" >Men</Link></li>
                <li><Link to="/WomenPage" className="dropdown-item" >Women</Link></li>
                <li><Link to="/KidsPage" className="dropdown-item">Kids</Link></li>

              </ul>
            </li>

            <li className="nav-item">
              <Link to="/CartPage" className="nav-link active" aria-current="page" >Cart</Link>
            </li>

            <li className="nav-item">
              <Link to="/ProfilePage" className="nav-link active" aria-current="page" >Profile</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/ProfilePage" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                
              </Link>
              <ul className="dropdown-menu">
                <li><Link to="/helpPage" className="dropdown-item" >Help & Support</Link></li>
                <li><Link to="/SettingsPage" className="dropdown-item" >Settings & Privacy</Link></li>
                <li><Link to="/Login" className="dropdown-divider">Log Out</Link></li>

              </ul>
            </li>
          <li className="nav-item">
            <Link to="/ListPage">Consumo</Link>
          </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
