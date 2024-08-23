'use client';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

//======================================
export interface CustomSwiperProps {
  slides: React.ReactNode[];
  swiperProps?: SwiperProps;
}

export const SwiperWrapper: React.FC<CustomSwiperProps> = (props) => {
  const defaultSwiperProps: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    autoplay: true,
    modules: [Autoplay, Pagination],
    pagination: {
      clickable: true,
      type: 'fraction',
    },
    ...props.swiperProps,
  };
  return (
    <Swiper {...defaultSwiperProps} className="sm:max-w-2xl max-w-xs">
      {props.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="pb-9">{slide}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
