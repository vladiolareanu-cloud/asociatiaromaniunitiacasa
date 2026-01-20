import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import cazuriData from "@/data/cazuri.json";

const CazuriSociale = () => {
  const [cazuri, setCazuri] = useState([]);

  useEffect(() => {
    setCazuri(cazuriData);
  }, []);

  // helper: detectează automat video după extensie
  const isVideo = (src) => {
    return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");
  };

  return (
    <section className="cazuri_sociale">
      <div className="container">
        <h2 className="fn_title">Cazuri Sociale</h2>

        {cazuri.map((caz, idx) => (
          <div key={idx} className="caz_item">
            <h3 className="fn_subtitle">{caz.titlu}</h3>

            {caz.cazuri.map((item, iidx) => (
              <div
                key={iidx}
                className={`caz_row ${item.pozitie}`}
                style={{
                  display: "flex",
                  flexDirection:
                    item.pozitie === "left" ? "row" : "row-reverse",
                  alignItems: "center",
                  gap: "30px",
                  flexWrap: "wrap",
                  marginBottom: "50px",
                }}
              >
                {/* MEDIA: imagine sau video */}
                {isVideo(item.poza) ? (
                  <video
                    src={item.poza}
                    controls
                    playsInline
                    style={{
                      width: "45%",
                      maxWidth: "400px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={item.poza}
                    alt={caz.titlu}
                    style={{
                      width: "45%",
                      maxWidth: "400px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                )}

                {/* TEXT */}
                <p
                  style={{
                    width: "50%",
                    fontSize: "18px",
                    lineHeight: "1.6",
                    textAlign: "justify",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}

            {/* SLIDER – rămâne DOAR imagini */}
            {caz.slider && caz.slider.length > 0 && (
              <div style={{ marginTop: "50px" }}>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  loop={true}
                  modules={[Autoplay]}
                  autoplay={{ delay: 0, disableOnInteraction: false }}
                  freeMode={true}
                  speed={5000}
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 10 },
                    480: { slidesPerView: 2, spaceBetween: 10 },
                    640: { slidesPerView: 2, spaceBetween: 10 },
                    768: { slidesPerView: 3, spaceBetween: 10 },
                    1024: { slidesPerView: 4, spaceBetween: 10 },
                  }}
                >
                  {caz.slider.map((img, sidx) => (
                    <SwiperSlide key={sidx}>
                      <img
                        src={img}
                        alt={`Slider ${sidx + 1}`}
                        style={{
                          width: "100%",
                          borderRadius: "10px",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CazuriSociale;
