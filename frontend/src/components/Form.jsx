import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [answers, setAnswers] = useState({
    answer1: null,
    answer2: null,
    answer3: null,
    answer4: null,
    answer5: null,
    answer6: null,
    answer7: null,
    answer8: null,
    answer9: null,
    answer10: null,
    answer11: null,
    answer12: null,
    answer13: null,
    answer14: null,
    answer15: null,
    answer16: null,
    answer17: null,
    answer18: null,
    answer19: null,
    answer20: null,
  });


  const handleInputChange = (questionNumber, optionValue) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`answer${questionNumber}`]: optionValue,
    }));
  };
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    

    try {
      const response = await fetch(`${apiUrl}/api/anket/degerlendir`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: Object.values(answers) }),
      });

      if (!response.ok) {
        throw new Error("API'den geçersiz bir yanıt alındı.");
      }

      const data = await response.json();
      console.log("API Cevabı:", data);
      setShowPopup(true);
      setPopupMessage(data.result);
      // Pop-up mesajını API yanıtından al
      
      

    } catch (error) {
      console.error("API İsteği Hatası:", error.message);
    }
  };
  
  const closePopup = () => {
    // Pop-up'ı kapat
    setShowPopup(false);
  };

  const questions = [
    "1.Bir web sitesinin nasıl yapılabileceğiyle ilgili düşünürüm.",
    "2.Güzel tasarlanmış ön yüzlü bir web sitesi ziyaret ettiğimde nasıl yapılmış olabileceği ilgimi çeker.",
    "3.Hayalini kurduğum bir web sitesi projem var.",
    "4.Web programlama yapabilmek için baştan sona bir yazılım dilini öğrenmek hoşuma gidebilir.",
    "5.Bir web sitesi ziyaretimde işleyişin arka tarafta nasıl olabileceğiyle ilgili meraklanırım.",
    "6.Bir Mobil uygulamanın nasıl yapılabileceğiyle ilgili düşünürüm.",
    "7.Bir Mobil uygulamanın önyüz tasarımını yapıyor olmak hoşuma gider.",
    "8.Hayalini kurduğum bir mobil uygulama projem var.",
    "9.Bir mobil uygulama yapabilmek için bir yazılım dilini ve bir teknolojiyi baştan sona öğrenmek hoşuma gider.",
    "10.Daha önce mobil uygulama alanında bir proje yapma girişimim oldu.",
    "11.Daha önce bir oyun geliştirme girişimim oldu.",
    "12.Oyunlarla İlgili Teknolojik Gelişmeleri ve Trendleri Takip Ediyor musunuz?",
    "13.Bir Oyun Motoru -Unity, Unreal vb.- Kullanma Deneyiminiz Var mı?",
    "14.Oyun Geliştirme Araçları ve Dilleri Hakkında Temel Bilgiye Sahip misiniz?",
    "15.Kafamda hayata geçirmek istediğim bir oyun projem var.",
    "16.İstatistik ve Matematik Konularına Olan Hakimiyetiniz Var mı?",
    "17.Veri Bilimi ve Analitik Alanındaki Gelişmeleri ve Trendleri Takip Ediyor musunuz?",
    "18.Veri Bilimi veya Veri Analitiği Deneyiminiz Var mı?",
    "19.Şu Anda Veri Bilimi Projeleri Üzerinde Çalışmak İster misiniz?",
    "20.Bir Veri Bilimi Araç veya Dilini -Python, R, vb.- Kullanma Deneyiminiz Var mı?",
  ];

  return (
    <section className="form">
      <h1>Yazılım Alanını Keşfet:</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div className="radio" key={index + 1}>
            <p>{`${index + 1}. ${question}`}</p>
            <label>
              <input
                type="radio"
                value="evet"
                checked={answers[`answer${index + 1}`] === "evet"}
                onChange={() => handleInputChange(index + 1, "evet")}
              />
              Evet
            </label>
            <label>
              <input
                type="radio"
                value="hayir"
                checked={answers[`answer${index + 1}`] === "hayir"}
                onChange={() => handleInputChange(index + 1, "hayir")}
              />
              Hayır
            </label>
          </div>
        ))}
        <button type="submit">Bitti</button>
      </form>
       {/* Pop-up Ekranı */}
       {showPopup && (
      <div className="popup">
        <div className="popup-content">
       <span className="close" onClick={closePopup}>
        &times;
       </span>
       <p>{popupMessage}</p>
      </div>
     </div>
  )}

    </section>
  );
};

export default Form;
