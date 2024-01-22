import "./Egitimler.css"
import EgitimlerItem from "./EgitimlerItem";
const Egitimler = () => {
    return (
      <section className="egitimler">
        <div className="container">
          <div className="section-title">
            <h2>Eğitimler</h2>
            <p>Alanına uygun eğitimlere şimdi başla!</p>
          </div>
          <ul className="egitimler-list">
            <EgitimlerItem/>
            <EgitimlerItem/>
            <EgitimlerItem/>
            <EgitimlerItem/>
            <EgitimlerItem/>
            <EgitimlerItem/>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Egitimler;