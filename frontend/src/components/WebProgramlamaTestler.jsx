import React, { useState } from 'react';
import './Testler.css';

const WebProgramlamaTestler = () => {
  // Sorular ve rastgele doğru şıklar
  const sorular = [
    {
      id: 1,
      soruMetni: 'JavaScript hangi tipte bir programlama dilidir?',
      secenekler: ['Derlemeli', 'Yorumlamalı', 'İşlevsel', 'Nesne Tabanlı'],
      dogruSecenek: 'Yorumlamalı',
    },
    {
      id: 2,
      soruMetni: 'React hangi tip bir kütüphanedir?',
      secenekler: ['UI', 'Server-side', 'Database', 'Styling'],
      dogruSecenek: 'UI',
    },
    {
        id: 3,
        soruMetni: 'Web sayfalarında yapısal ve görsel düzenleme için hangi iki temel teknoloji kullanılır?',
        secenekler: ['HTML ve JavaScript', 'HTML ve Css', 'Css ve JavaScript', 'XML ve Css'],
        dogruSecenek: 'HTML ve Css',
    },
    {
        id: 4,
        soruMetni: 'Bir JavaScript değişkenini tanımlamak için hangi anahtar kelime kullanılır?',
        secenekler: ['var', 'lest', 'const', 'both B and C'],
        dogruSecenek: 'both B and C',
    },
    {
        id: 5,
        soruMetni: 'Reactta bir bileşenin içindeki statei güncellemek için kullanılan fonksiyon nedir?',
        secenekler: ['this.setState()', 'this.updateState()', 'this.modifyState()', 'this.changeState()'],
        dogruSecenek: 'this.setState()',
    },
    {
      id: 6,
      soruMetni: 'Node.js nedir ve ne tür uygulamalarda kullanılır?',
      secenekler: [' Bir web tarayıcısı', 'Sunucu tarafında JavaScript çalıştırmak için kullanılan bir ortam', 'Grafik tasarım aracı', 'Mobil uygulama geliştirmek için bir platform'],
      dogruSecenek: 'Sunucu tarafında JavaScript çalıştırmak için kullanılan bir ortam',
    }, 
    {
      id: 7,
      soruMetni: 'RESTful bir API da HTTP metodları nelerdir?',
      secenekler: ['GET, POST, UPDATE, DELETE', 'FETCH, ADD, MODIFY, REMOVE', 'READ, WRITE, EDIT, DELETE', 'GET, POST, PUT, DELETE'],
      dogruSecenek: 'GET, POST, PUT, DELETE',
    },
    {
      id: 8,
      soruMetni: 'AJAX nedir ve ne işe yarar?',
      secenekler: ['Asenkron JavaScript ve XML, web sayfalarını güncellemek için kullanılır.', 'Bir programlama dilidir.', 'Animasyonlu JSON ve XML, kullanıcı arayüzünü iyileştirmek için kullanılır.', 'Otomatik JSON ve XML, web tarayıcısının hızını artırmak için kullanılır.'],
      dogruSecenek: 'Asenkron JavaScript ve XML, web sayfalarını güncellemek için kullanılır.',
    },
    {
      id: 9,
      soruMetni: 'SQL enjeksiyonu nedir ve nasıl önlenir?',
      secenekler: [' Web sayfasının tasarımını güzelleştirmek için kullanılır.', 'Bir saldırganın kötü amaçlı SQL kodu enjekte etmesini önlemek için güvenlik önlemleri alınmalıdır.', 'Veritabanındaki verileri düzenlemek için kullanılır.', 'Web sayfasının performansını artırmak için kullanılır.'],
      dogruSecenek: 'Bir saldırganın kötü amaçlı SQL kodu enjekte etmesini önlemek için güvenlik önlemleri alınmalıdır.',
    },
    {
      id: 10,
      soruMetni: 'Responsive web tasarımın amacı nedir?',
      secenekler: ['Web tarayıcılarının hızını artırmak', 'Web sayfalarını farklı cihazlarda (mobil, tablet, masaüstü) iyi görünmesini sağlamak', 'Güvenlik önlemleri uygulamak', 'Web sayfasının rengini değiştirmek'],
      dogruSecenek: ' Web sayfalarını farklı cihazlarda (mobil, tablet, masaüstü) iyi görünmesini sağlamak',
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
      <h1>Web Geliştirme Testi</h1>
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

export default WebProgramlamaTestler;
