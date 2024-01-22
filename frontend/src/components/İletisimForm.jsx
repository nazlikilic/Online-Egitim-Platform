import "./İletisimForm.css";
const İletisimForm = () => {
    return(
        <section className="contact">
        <div className="contact-top">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.929441087738052!3d41.04793012296828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d021adf417%3A0xba3a3fdfdbb5f5d!2sEy%C3%BCp%20Sultan%20Camii!5e0!3m2!1str!2str!4v1665091191675!5m2!1str!2str"
              width="100%"
              height="500"
              style={{
                border: "0",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="container">
            <div className="contact-titles">
              <h4>Eğitmen Ol</h4>
              <h2>Bize Katıl!</h2>
              <p>
                Yazılım bilgine güveniyorsan, bilgini paylaşmak, öğretmek isteyen bir gönüllüysen hemen formu doldur!
              </p>
            </div>
            <div className="contact-elements">
              <form className="contact-form">
                <div className="">
                  <label>
                    İsim-Soyisim
                    <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="">
                  <label>
                    Email adres
                    <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="">
                  <label>
                    Subject
                    <span>*</span>
                  </label>
                  <input type="text" required />
                </div>
                <div className="">
                  <label>
                    Not:
                    <span>*</span>
                  </label>
                  <textarea
                    id="author"
                    name="author"
                    type="text"
                    defaultValue="0"
                    size="30"
                    required=""
                  ></textarea>
                </div>
                <button className="btn btn-sm form-button">Gönder</button>
              </form>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong>EduMentor Eğitim</strong>
                    <a href="tel:Phone: 0532 433 12 51">tel:0532 433 12 51</a>
                    <a href="mailto:Email: 202003011034@dogus.edu.tr">
                      Email: 202003011034@dogus.edu.tr
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong>Çalışma Saatleri</strong>
                    <p className="contact-date">7/24</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default İletisimForm