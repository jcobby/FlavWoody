"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const images = [
  "/imagess/homepage/home1.jpg",
  "/imagess/homepage/home2.jpg",
  "/imagess/homepage/home3.jpg",
  "/imagess/homepage/home4.jpg",
  "/imagess/homepage/home5.jpg",
  "/imagess/homepage/home6.jpg",
  "/imagess/homepage/home7.jpg",
  "/imagess/homepage/home8.jpg",
  "/imagess/homepage/home9.jpg",
  "/imagess/homepage/home10.jpg",
  "/imagess/homepage/home11.jpg",
  "/imagess/homepage/home12.jpg",
];

function SlideShow() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={24}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1.15 },
          640: { slidesPerView: 1.6 },
          1024: { slidesPerView: 2.2 },
        }}
        className="mySwiper !pb-14"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl">
              <Image
                src={src}
                alt={`Showroom piece ${index + 1}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 45vw"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideShow;
