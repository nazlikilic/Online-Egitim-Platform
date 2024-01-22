import { Link } from "react-router-dom"
import "./EgitimlerItem.css";
const EgitimlerItem = () => {
    return (
      <li className="egitimler-item">
        <a href="#" className="egitimler-image">
           
        </a>
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Şimdi Başla! </span>
          </div>
          <div className="egitimler-info-center">
           <Link to="/Wdersler"> Web Geliştirme!</Link>
          </div>
          <div className="egitimler-info-bottom">
            <a href="#">Web Geliştirme Eğitimi</a>
          </div>
        </div>
        <br />
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Şimdi Başla! </span>
          </div>
          <div className="egitimler-info-center">
            <Link to="/Mdersler">Mobil Uygulama!</Link>
          </div>
          <div className="egitimler-info-bottom">
            <a href="#">Mobil Uygulama Geliştirme Eğitimi</a>
          </div>
        </div>
        <br />
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Şimdi Başla! </span>
          </div>
          <div className="egitimler-info-center">
            <Link to="/Vdersler">Veri Bilimi!</Link>
          </div>
          <div className="egitimler-info-bottom">
            <a href="#">Veri Bilimi Eğitimi</a>
          </div>
        </div>
        br
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Şimdi Başla! </span>
          </div>
          <div className="egitimler-info-center">
            <Link to="/Odersler">Oyun Geliştirme!</Link>
          </div>
          <div className="egitimler-info-bottom">
            <a href="#">Oyun Geliştirme Eğitimi</a>
          </div>
        </div>
        <br />
        
      </li>
    );
  };
  
  export default EgitimlerItem;