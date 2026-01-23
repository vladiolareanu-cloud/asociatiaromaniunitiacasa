import VideoPopupLocal from "@/components/popup/VideoPopupLocal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import jsonData from "@/data/encazuri.json";

const CazuriSociale = () => {
  return (
    <>
      {/* VIDEO DE SUS */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mb-20">
        <VideoPopupLocal
          videoSrc="/img/MAAS/MAAS_movie.mp4"
          trigger={
            <div className="neoh_fn_video">
              <div
                className="relative rounded-lg overflow-hidden w-full"
                style={{ paddingTop: "56.25%" }} // 16:9
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
      </div>

      {/* CAMPANII */}
      {jsonData.map((campanie, campIndex) => (
        <div key={campIndex} className="mb-24">
          {/* TITLU CAMPANIE */}
          <div className="text-center my-12">
            <h2 className="text-[#00bfff] text-3xl md:text-4xl font-bold">
              {campanie.titlu}
            </h2>
          </div>

          {/* CAZURI */}
          <div className="cazuri_sociale_wrapper">
            {campanie.cazuri.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-6 mb-16
                  ${
                    item.pozitie === "left"
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }
                  md:items-center`}
              >
                {/* MEDIA */}
                {item.poza.endsWith(".mp4") ? (
                  <div
                    className="w-full md:w-1/2 rounded-lg overflow-hidden relative bg-black"
                    style={{ paddingTop: "56.25%" }}
                  >
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
                <p className="w-full md:w-1/2 text-justify text-base md:text-lg leading-relaxed px-2 md:px-6">
                  {item.text}
                </p>
              </div>
            ))}

            {/* SLIDER */}
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
                  320: { slidesPerView: 1 },
                  480: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
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
