import Image from "next/image";
import React, { useRef, useState } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Car } from "../../shared/interfaces/car.interface";
import CarItem from "./CarItem";

const CarsList: React.FC<{ cars: Car[] }> = ({ cars }) => {
  const swiperRef = useRef({} as SwiperCore);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={20}
        onBeforeInit={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          768: {
            centeredSlides: false,
          },

          900: {
            slidesPerView: 3,
            centeredSlides: false,
          },

          1100: {
            slidesPerView: 4,
            centeredSlides: false,
          },

          1600: {
            slidesPerView: 5,
            centeredSlides: false,
          },
        }}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarItem car={car} />
          </SwiperSlide>
        ))}
      </Swiper>

      {cars.length > 0 ? (
        <section className="mt-7">
          <div className="hidden md:flex gap-3 items-center justify-end">
            <button
              className="disabled:opacity-25"
              disabled={activeIndex === 0}
            >
              <Image
                loader={() => "/icons/chevron-circled.svg"}
                src="/icons/chevron-circled.svg"
                className="rotate-180"
                alt="prev"
                width={40}
                height={40}
                onClick={() => swiperRef.current?.slidePrev()}
              />
            </button>

            <button
              className="disabled:opacity-25"
              disabled={activeIndex > cars.length - 4 || cars.length <= 4}
            >
              <Image
                loader={() => "/icons/chevron-circled.svg"}
                src="/icons/chevron-circled.svg"
                alt="next"
                width={40}
                height={40}
                onClick={() => swiperRef.current?.slideNext()}
              />
            </button>
          </div>

          <div className="flex md:hidden gap-2 items-center justify-center">
            {cars.map((car, index) => (
              <span
                key={car.id}
                className={`${
                  activeIndex === index ? "bg-gray-700" : "bg-gray-200"
                } rounded-lg w-3 h-3`}
                onClick={() => swiperRef.current?.slideTo(index)}
              />
            ))}
          </div>
        </section>
      ) : (
        <p className="flex justify-center mt-5">Nenhum carro foi encontrado!</p>
      )}
    </div>
  );
};

export default CarsList;
