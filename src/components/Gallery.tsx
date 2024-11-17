import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from "swiper/modules";

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
      <div className="prose lg:prose-lg mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={'auto'}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop
          centeredSlides
        >
          {Array.from({ length: 17 }).map((_, i) => (
            <SwiperSlide key={i} style={{ width: 'auto' }} className="pb-10">
              <img src={`/assets/photo (${i+1}).jpg`} alt={`${i+1}-image`} className="h-96 max-sm:h-64 rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
