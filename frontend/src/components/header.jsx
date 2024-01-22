import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const { pathname } = useLocation();
  const user = localStorage.getItem("user");

  return (
    <header>
      <div className="global-notification">
        <div className="container">
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <a className="logo">
                EduMentor
              </a>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    <Link to={"/"} className="menu-link active">
                      Alanını Keşfet!
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                   
                  </li>
                  <li className="menu-list-item megamenu-wrapper">
                    < Link to={"Egitimler"} className="menu-link">
                      Eğitimler
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                    
                  </li>
                  <li className="menu-list-item">
                    <Link to={"GelistiriciTestler"} className="menu-link">
                      Geliştirici Testler
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    <Link to={"BizeKatil"} className="menu-link">
                      Bize Katıl
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
            <div className="header-right">
              <div className="header-right-links">
                <Link to={"AuthPage"} className="header-account">
                  <i className="bi bi-person"></i>
                </Link>
                <a href="#">
                <i className="bi bi-journals"></i>
                </a>

                {user && (
                  <button
                    className="box-arrow"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Çıkış yapmak istediğinize emin misiniz?"
                        )
                      ) {
                        {
                          localStorage.removeItem("user");
                          window.location.href = "/";
                        }
                      }
                    }}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;