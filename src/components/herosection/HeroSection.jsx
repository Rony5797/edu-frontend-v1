import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./herosection.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function HeroSection() {
  return (
    <div className="w-full h-[380px] sm:h-[480px] 2xl:h-[680px] overflow-hidden">
      {/* Container with fixed height */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto play settings
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="h-full" // Make sure swiper takes full height
      >
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/736x/99/1f/d7/991fd7da9a1423ee76442911317f8146.jpg"
            alt="Slide 1"
            className="w-full h-full object-cover" // Tailwind classes to cover the slide
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white p-4 text-center">
            <h1
              className="text-[26px] xl:text-[46px] 2xl:text-[56px] font-bold mb-4"
              style={{ fontFamily: '"Noto Serif Bengali", serif' }}
            >
              দারুণ উলূম আমবাগ মাদরাসার <br /> পক্ষ থেকে স্বাগতম!
            </h1>
            <button className="px-6 py-2 bg-[#0a8761] hover:bg-[#1a7056] rounded">
              <p>বিস্তারিত আরও</p>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinkof.club/uploads/posts/2022-12/1670499069_kartinkof-club-p-kartinki-musulmanskii-5.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover" // Tailwind classes to cover the slide
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white p-4 text-center">
            <h1
              className="text-[26px] xl:text-[46px] 2xl:text-[56px] font-bold mb-4"
              style={{ fontFamily: '"Noto Serif Bengali", serif' }}
            >
              জ্ঞানার্জন করা প্রত্যেক মুসলমানের
              <br />
              ওপর ফরজ।
            </h1>

            <button className="px-6 py-2 bg-[#0a8761] hover:bg-[#1a7056] rounded">
              <p>বিস্তারিত আরও</p>
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.pinimg.com/originals/79/c3/f6/79c3f65518e5786689e346e7576e00c8.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover" // Tailwind classes to cover the slide
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white p-4 text-center">
            <h1
              className="text-[26px] xl:text-[46px] 2xl:text-[56px] font-bold mb-4"
              style={{ fontFamily: '"Noto Serif Bengali", serif' }}
            >
              যারা আল্লাহর পথে ধৈর্য ধারণ করে
              <br />
              তাদের জন্যই আছে সফলতা।
            </h1>
            <button className="px-6 py-2 bg-[#0a8761] hover:bg-[#1a7056] rounded">
              <p>বিস্তারিত আরও</p>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;
