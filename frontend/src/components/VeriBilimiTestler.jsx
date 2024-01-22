import React, { useState } from 'react';
import './Testler.css';

const VeriBilimiTestler = () => {
  // Sorular ve rastgele doğru şıklar
  const sorular = [
    {
      id: 1,
      soruMetni: 'Veri bilimi nedir ve bir organizasyon için neden önemlidir?',
      secenekler: ['Yalnızca büyük veri setlerini analiz etme işlemidir.', 'Verilerden anlamlı bilgiler çıkarma sürecidir.', 'Yalnızca programlama dili öğrenme sürecidir.', 'Tümü'],
      dogruSecenek: 'Verilerden anlamlı bilgiler çıkarma sürecidir.',
    },
    {
      id: 2,
      soruMetni: 'Veri bilimi projelerinde neden genellikle Python kullanılır?',
      secenekler: ['Çok hızlı bir dil olduğu için.', 'Geniş bir kütüphane ekosistemine sahip olduğu için.', 'Yalnızca veri bilimi için özel olarak tasarlanmıştır.', 'Tümü yukarıdakiler'],
      dogruSecenek: 'Geniş bir kütüphane ekosistemine sahip olduğu için.',
    },
    {
        id: 3,
        soruMetni: 'Bir veri bilimci, veri setini analiz etmek için hangi teknikleri kullanabilir?',
        secenekler: ['İstatistiksel analiz', 'Makine öğrenimi algoritmaları', 'Veri görselleştirmesi', 'Tümü'],
        dogruSecenek: 'Tümü',
    },
    {
        id: 4,
        soruMetni: 'Makine öğrenimi nedir ve gerçek dünya uygulamalarında nasıl kullanılır?',
        secenekler: ['Veriye dayalı bir öğrenme sürecidir.', 'Tahminlerde bulunmak ve desenleri tanımak için kullanılır.', 'Yalnızca özel endüstrilerde kullanılır.', 'Tümü yukarıdakiler'],
        dogruSecenek: 'Tümü',
    },
    {
        id: 5,
        soruMetni: 'Veri madenciliği nedir ve hangi tür bilgileri ortaya çıkarmak için kullanılır?',
        secenekler: ['Bilinmeyen desenleri ve bilgileri ortaya çıkarmak için kullanılır.', 'Sadece yapılandırılmış verileri analiz eder.', 'Sadece tarihsel verilere odaklanır.', 'Tümü yukarıdakiler'],
        dogruSecenek: 'Bilinmeyen desenleri ve bilgileri ortaya çıkarmak için kullanılır.',
    },
    {
      id: 6,
      soruMetni: 'Büyük veri teknolojileri nelerdir ve hangi durumlarda kullanılır?',
      secenekler: ['Apache Hadoop, Apache Spark', 'MySQL, PostgreSQL', 'C# ve .NET', 'Tümü'],
      dogruSecenek: 'Apache Hadoop, Apache Spark',
    }, 
    {
      id: 7,
      soruMetni: 'Veri bilimi projelerinde veri güvenliği ve gizliliği neden önemlidir?',
      secenekler: ['Yasal düzenlemelere uyum sağlamak için.', 'Müşteri güvenini korumak için.', 'Veri sızıntılarını önlemek için.', 'Tümü'],
      dogruSecenek: 'Tümü',
    },
    {
      id: 8,
      soruMetni: 'Doğrusal regresyon nedir ve hangi tür problemlerde kullanılır?',
      secenekler: ['Sınıflandırma problemlerinde kullanılır.', 'Bir bağımlı değişken ile bağımsız değişkenler arasındaki ilişkiyi modeller.', 'Yalnızca kategorik verileri analiz eder.', 'Tümü'],
      dogruSecenek: 'Bir bağımlı değişken ile bağımsız değişkenler arasındaki ilişkiyi modeller.',
    },
    {
      id: 9,
      soruMetni: 'Veri bilimi projelerinde neden veri görselleştirmesi kullanılır?',
      secenekler: ['Karmaşık verileri anlamak için.', 'Karmaşık verileri anlamak için.', 'Yalnızca sayısal verileri görselleştirmek için.', 'Tümü'],
      dogruSecenek: 'Tümü',
    },
    {
      id: 10,
      soruMetni: 'Derin öğrenme nedir ve hangi uygulama alanlarında kullanılır?',
      secenekler: ['Beyin gibi çalışan yapay sinir ağları kullanır.', 'Sadece görüntü tanıma için kullanılır.', 'Yalnızca küçük veri setlerinde etkilidir.', 'Tümü'],
      dogruSecenek: 'Beyin gibi çalışan yapay sinir ağları kullanır.',
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
      <h1>Veri Bilimi Testi</h1>
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

export default VeriBilimiTestler;
