import React, { useRef } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function TeachersSlider() {
  // Data for the cards
  const cards = [
    {
      img: "https://storage.googleapis.com/example-images/130122/teacher/2.jpg",
      name: "আব্দুল কাইয়ুম",
      text: "মাওলানা আব্দুল কাইয়ুম ঢাকা মাদ্রাসা থেকে তার হিফজ ও দাওরায়ে হাদিস সম্পন্ন করেছেন। তিনি বিভিন্ন সেমিনার ও কর্মশালায় অংশগ্রহণ করে ইসলামী শিক্ষার প্রচার ও প্রসারে তার দক্ষতা বৃদ্ধি করেছেন। ",
    },
    {
      img: "https://cdam.edu.bd/uploads/images/staff/bdcddce004724e2be84d7de407d18995.jpg",
      name: "হাফিজ ইমদাদুল হক",
      text: "মাওলানা আব্দুল কাইয়ুম ঢাকা মাদ্রাসা থেকে তার হিফজ ও দাওরায়ে হাদিস সম্পন্ন করেছেন। তিনি বিভিন্ন সেমিনার ও কর্মশালায় অংশগ্রহণ করে ইসলামী শিক্ষার প্রচার ও প্রসারে তার দক্ষতা বৃদ্ধি করেছেন। ",
    },
    {
      img: "https://storage.googleapis.com/example-images/130441/teacher/1.jpg",
      name: "মুফতি ফজলুর রহমান",
      text: "মাওলানা আব্দুল কাইয়ুম ঢাকা মাদ্রাসা থেকে তার হিফজ ও দাওরায়ে হাদিস সম্পন্ন করেছেন। তিনি বিভিন্ন সেমিনার ও কর্মশালায় অংশগ্রহণ করে ইসলামী শিক্ষার প্রচার ও প্রসারে তার দক্ষতা বৃদ্ধি করেছেন। ",
    },
    {
      img: "https://storage.googleapis.com/example-images/130122/teacher/8.jpg",
      name: "ক্বারী আবু তাহের",
      text: "মাওলানা আব্দুল কাইয়ুম ঢাকা মাদ্রাসা থেকে তার হিফজ ও দাওরায়ে হাদিস সম্পন্ন করেছেন। তিনি বিভিন্ন সেমিনার ও কর্মশালায় অংশগ্রহণ করে ইসলামী শিক্ষার প্রচার ও প্রসারে তার দক্ষতা বৃদ্ধি করেছেন। ",
    },
    {
      img: "https://storage.googleapis.com/example-images/130122/teacher/4.jpg",
      name: "মাওলানা কামাল উদ্দিন",
      text: "মাওলানা আব্দুল কাইয়ুম ঢাকা মাদ্রাসা থেকে তার হিফজ ও দাওরায়ে হাদিস সম্পন্ন করেছেন। তিনি বিভিন্ন সেমিনার ও কর্মশালায় অংশগ্রহণ করে ইসলামী শিক্ষার প্রচার ও প্রসারে তার দক্ষতা বৃদ্ধি করেছেন। ",
    },
    {
      img: "https://storage.googleapis.com/example-images/130122/teacher/5.jpg",
      name: "মুফতি সাইফুল ইসলাম",
      text: "মাওলানা আব্দুল কাইয়ুম ঢাকা মাদ্রাসা থেকে তার হিফজ ও দাওরায়ে হাদিস সম্পন্ন করেছেন। তিনি বিভিন্ন সেমিনার ও কর্মশালায় অংশগ্রহণ করে ইসলামী শিক্ষার প্রচার ও প্রসারে তার দক্ষতা বৃদ্ধি করেছেন। ",
    },
  ];

  const swiperRef = useRef(null);
  return (
    <div className="w-[100%] h-[650px] 2xl:h-[750px] swiper-container mt-2 xl:mt-10">
      <div className="flex justify-center">
        <h1 className="text-[36px] font-[700] text-[#363636] py-10">
          শিক্ষক <span className="text-[#0984e3]"> মন্ডলী</span>
        </h1>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerGroup={1} // Move one slide at a time
        autoplay={{
          delay: 1700,
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        loop={true} // Looping for continuous slides
        breakpoints={{
          // Define the breakpoints
          320: {
            slidesPerView: 1, // Show 1 slide on small screens (mobile)
          },
          768: {
            slidesPerView: 3, // Show 2 slides on medium screens (tablet)
          },
          1024: {
            slidesPerView: 4, // Show 4 slides on large screens (desktop)
          },
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Save the swiper instance
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="w-[100%] h-[650px] overflow-hidden px-3 sm:px-1">
              <img
                className="w-[100%] h-[340px] xl:h-[330px] 2xl:h-[450px] object-fill rounded-md"
                src={card.img}
                alt={`Card ${index + 1}`}
              />
              <h1 className="text-[26px] py-2">{card.name}</h1>
              <p>{card.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TeachersSlider;
