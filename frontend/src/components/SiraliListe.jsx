import React from 'react';
import { Link } from "react-router-dom"
import "./SiraliListe.css";

const SiraliListe = () => {
  return (
    <div className="ders-listesi">  
      <ul>
        <h2>Dersler</h2>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox"/>
            <Link to="/VideoAcilma" className="ders-baslik">Ders1</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox" />
            <Link to="/VideoAcilma" className="ders-baslik">Ders2</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox" />
            <Link to="/VideoAcilma" className="ders-baslik">Ders3</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox" />
            <Link to="/VideoAcilma" className="ders-baslik">Ders4</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox"  />
            <Link to="/VideoAcilma" className="ders-baslik">Ders5</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox"  />
            <Link to="/VideoAcilma" className="ders-baslik">Ders6</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox"   />
            <Link to="/VideoAcilma" className="ders-baslik">Ders7</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox"   />
            <Link to="/VideoAcilma" className="ders-baslik">Ders8</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox"   />
            <Link to="/VideoAcilma" className="ders-baslik">Ders9</Link>
          </a>
        </li>
        <li>
          <a href="#" className="ders-link">
            <input type="checkbox"   />
            <Link to="/VideoAcilma" className="ders-baslik">Ders10</Link>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SiraliListe;


