import React, { useState } from 'react';
import './Testler.css';

const MobilAppTestler = () => {
  // Sorular ve rastgele doğru şıklar
  const sorular = [
    {
      id: 1,
      soruMetni: 'Mobil uygulama geliştirmek için kullanılan genel bir programlama dili nedir?',
      secenekler: [' HTML', 'JavaScript', 'Java', 'Python'],
      dogruSecenek: 'Java',
    },
    {
      id: 2,
      soruMetni: 'Android uygulama geliştirme için hangi programlama dili kullanılır?',
      secenekler: ['Swift', 'Kotlin', 'Objective-C', 'Java'],
      dogruSecenek: 'Kotlin',
    },
    {
        id: 3,
        soruMetni: 'iOS uygulama geliştirmek için hangi programlama dili kullanılır?',
        secenekler: ['Java', 'Swift', 'Kotlin', 'C#'],
        dogruSecenek: 'Swift',
    },
    {
        id: 4,
        soruMetni: 'Bir mobil uygulamanın kullanıcı arayüzü (UI) ve kullanıcı deneyimi (UX) neden önemlidir?',
        secenekler: [' Sadece estetik açıdan önemlidir.', 'Kullanıcıların uygulamayı etkili bir şekilde kullanmalarını sağlamak için önemlidir.', 'Sadece pazarlama amaçlıdır.', 'Sadece büyük şirketler için önemlidir.'],
        dogruSecenek: 'Kullanıcıların uygulamayı etkili bir şekilde kullanmalarını sağlamak ',
    },
    {
        id: 5,
        soruMetni: 'Mobil uygulama geliştirirken, bir RESTful API ile iletişim kurmak için hangi HTTP metodları kullanılır?',
        secenekler: [' GET, POST', 'PUT, DELETE', 'FETCH, UPDATE', 'READ, WRITE'],
        dogruSecenek: 'GET, POST',
    },
    {
      id: 6,
      soruMetni: 'Mobil uygulamalarda yerel veritabanlarına erişim sağlamak için hangi teknolojiler kullanılır?',
      secenekler: ['SQL', 'NoSQL', 'SQLite', 'Firebase'],
      dogruSecenek: 'SQLite',
    }, 
    {
      id: 7,
      soruMetni: 'Mobil uygulama güvenliğini artırmak için hangi önlemler alınmalıdır?',
      secenekler: ['HTTPS kullanımı', 'Veri şifreleme', ' Oturum yönetimi', 'Tümü'],
      dogruSecenek: 'Tümü',
    },
    {
      id: 8,
      soruMetni: 'Mobil uygulamalarda kullanıcıları güncellemelerden haberdar etmek için kullanılan bir özellik nedir?',
      secenekler: ['SMS', ' Email', 'Push bildirimleri', 'Telefon aramaları'],
      dogruSecenek: ' Push bildirimleri',
    },
    {
      id: 9,
      soruMetni: 'Mobil uygulama geliştirirken hata ayıklama (debugging) için hangi araçlar kullanılır?',
      secenekler: ['Logcat (Android Studio)', 'Xcode Debugger (iOS)', 'Chrome Developer Tools (Webview)', 'Tümü'],
      dogruSecenek: 'Tümü yukarıdakiler',
    },
    {
      id: 10,
      soruMetni: 'Aynı kod tabanını kullanarak hem Android hem de iOS için mobil uygulama geliştirmek için hangi teknolojiler kullanılır?',
      secenekler: ['Java', 'Swift', 'React Native', 'Kotlin'],
      dogruSecenek: 'React Native',
    },

    

    // Diğer soruları ekleyebilirsiniz
  ];

  const [cevaplar, setCevaplar] = useState({});
  const [tiklananSecenek, setTiklananSecenek] = useState(null);

  const checkQuestion = (soruId, secenek) => {
    if (cevaplar[soruId] === undefined) {
      setTiklananSecenek(secenek);

      setTimeout(() => {
        if (secenek === sorular[soruId - 1].dogruSecenek) {
          setCevaplar((prevCevaplar) => ({ ...prevCevaplar, [soruId]: 'dogru' }));
        } else {
          setCevaplar((prevCevaplar) => ({ ...prevCevaplar, [soruId]: 'yanlis' }));
        }
        setTiklananSecenek(null);
      }, 1000);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Mobil Uygulama Geliştirme Testi</h1>
      <ol>
        {sorular.map((soru) => (
          <li key={soru.id}>
            <div className="card" id={`qs${soru.id}`}>
              <div className="card-header header-elements-inline">
                <h5 className="card-title">{`${soru.id}. Soru`}</h5>
              </div>

              <div className="card-body">
                <h4 className="soru-metin">
                  <div className="section">
                    <div className="layoutArea">
                      <div className="column">
                        <p>{soru.soruMetni}</p>
                      </div>
                    </div>
                  </div>
                </h4>
                <br />
              </div>

              <div className="col-12 col-lg-9" style={{ paddingLeft: '0.2rem' }}>
                <table className="table text-nowrap">
                  <tbody>
                    {soru.secenekler.map((secenek, secenekIndex) => (
                      <tr key={`${soru.id}_${secenekIndex}`}>
                        <td style={{ paddingLeft: 0 }}>
                          <div className="d-flex align-items-center mb-2">
                            <div className="mr-3">
                              <button
                                id={`q_${soru.id}_${secenekIndex}`}
                                onClick={() => checkQuestion(soru.id, secenek)}
                                className={`btn btn-sm soru-secenek-harf ${cevaplar[soru.id] === 'dogru' ? 'btn-success' : ''} ${tiklananSecenek === secenek ? (secenek === soru.dogruSecenek ? 'btn-success' : 'btn-danger') : ''}`}
                                disabled={cevaplar[soru.id] !== undefined}
                              >
                                {String.fromCharCode(65 + secenekIndex)}
                              </button>
                            </div>
                            <div className="soru-secenek">
                              <p>{secenek}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MobilAppTestler;
