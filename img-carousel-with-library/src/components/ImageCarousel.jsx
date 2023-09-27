import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Navigation, Pagination, EffectCoverflow } from "swiper";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

export default function ImageCarousel() {
  return (
    <>
      <Swiper
        className="mySwiper"
        effect={"coverflow"}
        grabCursor={ true }
        centeredSlides={ true }
        loop={ true }
        slidesPerView={"auto"}
        coverflowEffect={
            {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5
            }
        }

        pagination={
          ({ clickable: true })
        }
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src={images[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[4]} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={images[0]} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
