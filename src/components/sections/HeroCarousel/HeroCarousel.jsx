import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    Pagination,
    Navigation,
    EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import HeroSlide from "./HeroSlide";
import heroSlides from "./heroSlides";

const HeroCarousel = () => {
    return (
        <section className="bg-[#FFF8EF] py-8">
            {/* Hero has its own wider container */}
            <div className="mx-auto w-full max-w-[1650px] px-6">
                <Swiper
                    modules={[
                        Autoplay,
                        Pagination,
                        Navigation,
                        EffectFade,
                    ]}
                    slidesPerView={1}
                    loop
                    effect="fade"
                    speed={1000}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    className="overflow-hidden rounded-[40px] shadow-2xl"
                >
                    {heroSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <HeroSlide slide={slide} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HeroCarousel;