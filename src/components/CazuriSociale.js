import VideoPopupLocal from "@/components/popup/VideoPopupLocal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import jsonData from "@/data/cazuri.json";

const CazuriSociale = () => {
  return (
    <>
      {/* Video sub titlu */}
      <VideoPopupLocal
        videoSrc="/img/MAAS/MAAS_movie.mp4"
        trigger={
          <div className="neoh_fn_video">
            <div
              className="bg_overlay"
              style={{
                width: "100%",
                paddingTop: "56.25%", // 16:9 aspect ratio
                position: "relative",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <video
                className="bg_video"
                src="/img/MAAS/MAAS_movie.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </div>
            <div className="v_content">
              <img
                src="svg/play.svg"
                alt="Play"
                className="fn__svg"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        }
      />

      {/* TOATE campaniile din JSON */}
      {jsonData.map((campanie, campIndex) => (
        <div key={campIndex}>
          {/* Titlu campanie */}
          <div style={{ textAlign: "center", margin: "50px 0" }}>
            <h2
              style={{
                color: "#00bfff",
                fontSize: "36px",
                fontWeight: "bold",
              }}
            >
              {campanie.titlu}
            </h2>
          </div>

          {/* Cazuri */}
          <div className="cazuri_sociale_wrapper">
            {campanie.cazuri.map((item, index) => (
              <div
                key={index}
                className={`caz_block ${
                  item.pozitie === "left" ? "left" : "right"
                }`}
                style={{
                  display: "flex",
                  flexDirection:
                    item.pozitie === "left" ? "row" : "row-reverse",
                  alignItems: "center",
                  marginBottom: "50px",
                  gap: "30px",
                  flexWrap: "wrap",
                }}
              >
                {/* MEDIA: IMG sau VIDEO */}
                {item.poza.endsWith(".mp4") ? (
                  <div
                    style={{
                      width: "45%",
                      maxWidth: "400px",
                      borderRadius: "10px",
                      overflow: "hidden",
                      backgroundColor: "#000",
                      position: "relative",
                      paddingTop: "56.25%", // 16:9 aspect ratio
                    }}
                  >
                    <video
                      src={item.poza}
                      controls
                      playsInline
                      preload="metadata"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ) : (
                  <img
                    src={item.poza}
                    alt={`Poza ${index}`}
                    style={{
                      width: "45%",
                      maxWidth: "400px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                )}

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

            {/* Slider – DOAR IMAGINI */}
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
                {campanie.slider.map((img, key) => (
                  <SwiperSlide key={key}>
                    <img
                      src={img}
                      alt={`Slider ${key}`}
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CazuriSociale;
