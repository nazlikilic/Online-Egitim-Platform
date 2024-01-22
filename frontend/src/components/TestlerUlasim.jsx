import { Link } from "react-router-dom"
import "./TestlerUlasim.css"

const TestlerUlasim = () => {
    return (
      <li className="egitimler-item">
        <a href="#" className="egitimler-image">
           
        </a>
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Bilgini Ölç! </span>
          </div>
          <div className="egitimler-info-center">
            <Link to= "/WebProgramlamaTestiPage"> Web Geliştirme Ölçme ve Değerlendirme Testi!</Link>
          </div>
          <div className="egitimler-info-bottom">
           Web Geliştirme Testi
          </div>
        </div>
        <br />
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Bilgini Ölç! </span>
          </div>
          <div className="egitimler-info-center">
          <Link to= "/MobilAppTestiPage"> Mobil Uyglama Geliştirme Ölçme ve Değerlendirme Testi!</Link>
          </div>
          <div className="egitimler-info-bottom">
            Mobil Uygulama Geliştirme Testi
          </div>
        </div>
        <br />
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Bilgini Ölç! </span>
          </div>
          <div className="egitimler-info-center">
           <Link to="/VeriBilimiTestiPage"> Veri Bilimi Ölçme ve Değerlendirme Testi!</Link>
          </div>
          <div className="egitimler-info-bottom">
           Veri Bilimi Testi
          </div>
        </div>
        <br />
        <div className="egitimler-info">
          <div className="egitimler-info-top">
            <span>Bilgini Ölç! </span>
          </div>
          <div className="egitimler-info-center">
           <Link to="/OyunGelistirmeTestiPage">Oyun Geliştirme Ölçme ve Değerlendirme Testi!</Link>
          </div>
          <div className="egitimler-info-bottom">
            Oyun Geliştirme Testi
          </div>
        </div>








      </li>
    );
  };
  export default TestlerUlasim