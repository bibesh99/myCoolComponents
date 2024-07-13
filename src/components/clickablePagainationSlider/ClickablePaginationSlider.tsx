"use client"

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { MdSell } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { IoIosPeople } from 'react-icons/io';
import { LiaGlobeEuropeSolid } from 'react-icons/lia';
import { RiTeamFill } from 'react-icons/ri';
import Image from 'next/image';

import './ClickablePaginationSlider.css';

const ClickablePaginationSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressLine = useRef<HTMLDivElement>(null); 
  

  const progressContent = useRef<HTMLSpanElement>(null);

  const onAutoplayTimeLeft = (_: unknown, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  
  const progressBarLine = (_: unknown, progress: number) => {
    if (progressLine.current) {
      progressLine.current.style.setProperty('--progressline', `${1 - progress}`);
    }
  };
  

  return (
    <div className=''>
      <div className="w-full h-full flex items-center justify-center md:text-3xl p-9">
        Smarter scheduling for teams who conduct meetings at scale
      </div>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={0}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper cursor-pointer"
        style={{
          height: '15vh',
          width: '65vw',
          paddingLeft: '100px',
          paddingRight: '100px',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        onAutoplayTimeLeft={progressBarLine}
      >
        <SwiperSlide className="flex flex-col justify-center items-center relative">
          <div className="h-full flex-col w-full justify-center items-center text-center">
            <p className="text-center flex justify-center items-center text-3xl text-green-400">
              <MdSell />
            </p>
            <p className="font-semibold">Sales</p>
            <div className="progressBar w-0 bg-green-400">
              <div className=''/>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center relative">
          <div className="h-full flex-col w-full justify-center items-center text-center">
            <p className="text-center flex justify-center items-center text-3xl text-blue-400">
              <FaCartShopping />
            </p>
            <p className="font-semibold">Marketing</p>
            <div className="progressBar w-0 bg-blue-400">
              <div className='' />
            </div>
   
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center relative">
          <div className="h-full flex-col w-full justify-center items-center text-center">
            <p className="text-center flex justify-center items-center text-3xl text-red-500">
              <IoIosPeople />
            </p>
            <p className="font-semibold">Customer Hope</p>
            <div className="progressBar w-0 bg-red-400">
              <div className='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center relative">
          <div className="h-full flex-col w-full justify-center items-center text-center">
            <p className="text-center flex justify-center items-center text-3xl text-green-900">
              <LiaGlobeEuropeSolid />
            </p>
            <p className="font-semibold">Networks</p>
            <div className="progressBar w-0 bg-green-800">
              <div className='' />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center relative">
          <div className="h-full flex-col w-full justify-center items-center text-center">
            <p className="text-center flex justify-center items-center text-3xl">
              <RiTeamFill />
            </p>
            <p className="font-semibold">Teams</p>
            <div className="progressBar w-0 bg-black">
              <div className=''/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        style={{ height: '80vh', paddingLeft: '100px', paddingRight: '100px',paddingTop: "50px" }}
        autoplay={{
          delay: 5000, // 5 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
      >
        <SwiperSlide>
          <div className="flex w-full h-full px-6 justify-center items-center space-x-2">
            <div className="flex flex-col space-y-6 h-[500px] w-1/2 text-left p-8">
              <div>
                <h1 className="text-2xl anton-sc-regular text-green-400">Drive more revenue </h1>
                <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-green-400">Speed up your sales cycle</h1>
                <p>Quickly book time to solve customers’ needs and help them self-serve to support their goals.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-green-400">Close more deals</h1>
                <p>Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.</p>
              </div>
            </div>
            <div className="px-2 py-4 h-[500px] w-1/2">
              <Image className="size-80" src="/assets/img/sales.jpg" alt="asd" height={1920} width={1080} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full px-6 justify-center items-center space-x-2">
            <div className="flex flex-col space-y-6 h-[500px] w-1/2 text-left p-8">
              <div>
                <h1 className="text-2xl anton-sc-regular text-blue-400">Drive more revenue </h1>
                <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-blue-400">Speed up your sales cycle</h1>
                <p>Quickly book time to solve customers’ needs and help them self-serve to support their goals.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-blue-400">Close more deals</h1>
                <p>Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.</p>
              </div>
            </div>
            <div className="px-2 py-4 h-[500px] w-1/2">
              <Image className="" src="/assets/img/marketing.avif" alt="asd" height={1920} width={1080} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full px-6 justify-center items-center space-x-2">
            <div className="flex flex-col space-y-6 h-[500px] w-1/2 text-left p-8">
              <div>
                <h1 className="text-2xl anton-sc-regular text-red-400">Drive more revenue </h1>
                <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-red-400">Speed up your sales cycle</h1>
                <p>Quickly book time to solve customers’ needs and help them self-serve to support their goals.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-red-400">Close more deals</h1>
                <p>Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.</p>
              </div>
            </div>
            <div className="px-2 py-4 h-[500px] w-1/2">
              <Image className="" src="/assets/img/hope.jpg" alt="asd" height={1920} width={1080} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full px-6 justify-center items-center space-x-2">
            <div className="flex flex-col space-y-6 h-[500px] w-1/2 text-left p-8">
              <div>
                <h1 className="text-2xl anton-sc-regular text-green-800">Drive more revenue </h1>
                <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-green-800">Speed up your sales cycle</h1>
                <p>Quickly book time to solve customers’ needs and help them self-serve to support their goals.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-green-800">Close more deals</h1>
                <p>Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.</p>
              </div>
            </div>
            <div className="px-2 py-4 h-[500px] w-1/2">
              <Image className="" src="/assets/img/network.webp" alt="asd" height={1920} width={1080} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full px-6 justify-center items-center space-x-2">
            <div className="flex flex-col space-y-6 h-[500px] w-1/2 text-left p-8">
              <div>
                <h1 className="text-2xl anton-sc-regular text-black">Drive more revenue </h1>
                <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-black">Speed up your sales cycle</h1>
                <p>Quickly book time to solve customers’ needs and help them self-serve to support their goals.</p>
              </div>
              <div>
                <h1 className="text-2xl anton-sc-regular text-black">Close more deals</h1>
                <p>Change the way you schedule meetings to increase customer satisfaction and keep engagement high with reminder and follow-up workflows.</p>
              </div>
            </div>
            <div className="px-2 py-4 h-[500px] w-1/2">
              <Image className="" src="/assets/img/teams.jpg" alt="asd" height={1920} width={1080} />
            </div>
          </div>
        </SwiperSlide>
        {/* <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div> */}
      </Swiper>


    </div>
  );
};

export default ClickablePaginationSlider;
