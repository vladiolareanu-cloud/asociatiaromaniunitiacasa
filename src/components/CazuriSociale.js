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
              className="bg_overlay relative rounded-lg overflow-hidden"
              style={{ width: "100%", paddingTop: "56.25%" }} // 16:9
            >
              <video
                className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
                src="/img/MAAS/MAAS_movie.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
            <div className="v_content">
              <img
                src="svg/play.svg"
                alt="Play"
                className="fn__svg cursor-pointer"
              />
            </div>
          </div>
        }
      />

      {/* TOATE campaniile din JSON */}
      {jsonData.map((campanie, campIndex) => (
        <div key={campIndex} className="mb-20">
          {/* Titlu campanie */}
          <div className="text-center my-12">
            <h2 className="text-[#00bfff] text-3xl md:text-4xl font-bold">
              {campanie.titlu}
            </h2>
          </div>

          {/* Cazuri */}
          <div className="cazuri_sociale_wrapper max-w-[1200px] mx-auto px-4 md:px-6">
            {campanie.cazuri.map((item, index) => (
              <div
                key={index}
                className={`caz_block flex flex-col md:flex-row md:items-center gap-6 mb-12 ${
                  item.pozitie === "left" ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* MEDIA: IMG sau VIDEO */}
                {item.poza.endsWith(".mp4") ? (
                  <div className="w-full md:w-1/2 rounded-lg overflow-hidden relative" style={{ paddingTop: "56.25%" }}>
                    <video
                      src={item.poza}
                      controls
                      playsInline
                      preload="metadata"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img
                    src={item.poza}
                    alt={`Poza ${index}`}
                    className="w-full md:w-1/2 rounded-lg object-cover"
                  />
                )}

                {/* TEXT */}
                <p className="w-full md:w-1/2 text-justify text-base md:text-lg leading-relaxed px-4 md:px-6">
                  {item.text}
                </p>
              </div>
            ))}

            {/* Slider – DOAR IMAGINI */}
            <div className="mt-12">
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
                      className="w-full rounded-lg object-cover"
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
