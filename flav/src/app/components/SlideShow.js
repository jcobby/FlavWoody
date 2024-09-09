"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../../app/styles.css";

// Initialize Swiper modules
// SwiperCore.use([Autoplay, Pagination, Navigation]);

function SlideShow() {
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

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  //   const onAutoplayTimeLeft = (s, time, progress) => {
  //     progressCircle.current.style.setProperty("--progress", 1 - progress);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   };

  return (
    <div className="w-full h-screen bg-white">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true} // Enable looping
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        slidesPerView={1.5} // Show a bit of previous/next slides
        className="mySwiper "
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
            //   style={{ position: "relative", width: "100%", height: "500px" }}
            className="relative h-3/4 w-full"
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "cover" }} // Ensure the images fit the slide correctly
                priority={true}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          {/* <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg> */}
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      {/* <Swiper
         modules={[Navigation]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="responsive"
            width={1920}
            height={1080}
          />
        </SwiperSlide>
      ))}
    </Swiper> */}
    </div>
    // <div className="w-full h-screen bg-gray-800">
    //   <Swiper
    //   modules={[Navigation]}
    //     spaceBetween={20} // Space between slides to show previous/next slide edges
    //     slidesPerView={1.5} // Show a bit of previous/next slides
    //     centeredSlides={true} // Center the active slide
    //     loop={true} // Enable looping
    //     autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay settings
    //     pagination={{ clickable: true }} // Enable pagination
    //     navigation={true} // Enable navigation buttons
    //     className="w-full h-3/4" // Adjust height
    //   >
    //     {images.map((image, index) => (
    //       <SwiperSlide key={index}>
    //         <div className="relative w-full h-full">
    //           <Image
    //             src={image}
    //             alt={`Slide ${index + 1}`}
    //             fill
    //             style={{ objectFit: "cover" }} // Replacing the objectFit prop
    //             priority={true} // Helps with image loading performance
    //           />
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
}

export default SlideShow;
