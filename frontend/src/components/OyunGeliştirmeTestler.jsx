import React, { useState } from 'react';
import './Testler.css';

const MobilAppTestler = () => {
  // Sorular ve rastgele doğru şıklar
  const sorular = [
    {
      id: 1,
      soruMetni: 'Unity ve Unreal Engine gibi popüler oyun geliştirme platformları nelerdir?',
      secenekler: ['Cocos2d', 'Phaser', 'Unity', 'Her ikisi de doğru'],
      dogruSecenek: 'Her ikisi de doğru',
    },
    {
      id: 2,
      soruMetni: 'Bir oyun motorunun temel bileşenleri nelerdir?',
      secenekler: ['Sahne sistemi, fizik motoru, render motoru', ' Ses motoru, yapay zeka motoru, animasyon motoru', 'Yapay zeka motoru, grafik motoru, oyun motoru', 'Her üçü de doğru'],
      dogruSecenek: 'Sahne sistemi, fizik motoru, render motoru',
    },
    {
        id: 3,
        soruMetni: 'Oyun geliştirme sürecinde 3D modelleme ve animasyon için kullanılan yazılımlar nelerdir?',
        secenekler: ['Blender, Maya', 'Unity, Unreal Engine', 'Photoshop, Illustrator', ' Her ikisi de doğru'],
        dogruSecenek: 'Blender, Maya',
    },
    {
        id: 4,
        soruMetni: 'Oyunlarda fizik motorları, hangi türde etkileşimler sağlar?',
        secenekler: ['Karakter hareketleri', 'Nesne çarpışmaları', 'Yerçekimi', 'Tümü'],
        dogruSecenek: 'Tümü',
    },
    {
        id: 5,
        soruMetni: 'Oyun mekanikleri nedir ve bir oyunun oynanabilirliğini nasıl etkiler?',
        secenekler: ['Oyun içi ekonomi, hikaye anlatımı', 'Oyuncu hareketleri, düşman davranışları', 'Oyun içi görevler, puan sistemleri', 'Tümü'],
        dogruSecenek: 'Tümü',
    },
    {
      id: 6,
      soruMetni: 'Oyun geliştirme sürecinde kullanılan yapay zeka teknikleri nelerdir?',
      secenekler: ['Yol bulma, düşman davranışları', 'Ses tanıma, görüntü analizi', 'Şifreleme, veri tabanı yönetimi', 'Tümü yukarıdakiler'],
      dogruSecenek: 'Yol bulma, düşman davranışları',
    }, 
    {
      id: 7,
      soruMetni: 'Oyun testi neden önemlidir ve hangi aşamalarda yapılır?',
      secenekler: ['Oyunun kalitesini artırmak için, beta aşamasında', 'Oyunun hatalarını bulmak için, geliştirme sürecinin her aşamasında', 'Oyunun hedef kitlesi ile uyumlu olup olmadığını kontrol etmek için, yayın öncesi', 'Tümü'],
      dogruSecenek: 'Tümü',
    },
    {
      id: 8,
      soruMetni: ' Oyun geliştirmede kullanılan grafik ve efekt teknolojileri nelerdir?',
      secenekler: ['Shader, ray tracing', ' Voxel, bitmap', 'CSS, HTML', 'Her ikisi de doğru değil'],
      dogruSecenek: 'Shader, ray tracing',
    },
    {
      id: 9,
      soruMetni: 'Oyun tasarımında kullanılan temel prensipler nelerdir?',
      secenekler: ['Oyun içi dengeler, ilerleme sistemi', 'Oyun dünyası tasarımı, karakter gelişimi', 'Oyun içi ekonomi, kullanıcı arayüzü', 'Tümü'],
      dogruSecenek: 'Tümü',
    },
    {
      id: 10,
      soruMetni: 'Oyun geliştiricileri oyunlarını nasıl gelir elde etmek için kullanabilir?',
      secenekler: ['Reklamlar, in-app satın alımlar', 'Ücretli indirmeler, bağışlar', 'Sponsorluklar, oyun içi reklamlar', 'Tümü'],
      dogruSecenek: 'Tümü',
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
      <h1>Oyun Geliştirme Testi</h1>
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
