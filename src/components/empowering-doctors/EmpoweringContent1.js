// import React from 'react'
import { doctorArr } from '../../Data/LocalData';
// import OwlCarousel from "react-owl-carousel";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import { A11y, Navigation, Scrollbar, Pagination, Autoplay, } from 'swiper/modules';

const EmpoweringContent1 = () => {
    // const options = {
    //     dots: false,
    //     nav: false,
    //     autoplay: false,
    //     mouseDrag: true,
    //     smartSpeed: 2000,
    //     loop: true,
    //     center: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 10,
    //             dots: true,
    //         },
    //         600: {
    //             items: 1,
    //             margin: 15,
    //             dots: true,
    //         },
    //         1000: {
    //             items: 2,
    //             margin: 20,
    //             dots: true,
    //         },
    //         1200: {
    //             items: 3,
    //             stagePadding: 30,
    //             margin: 30,
    //         }
    //     }

    // };
  return (
      <>
         <div className="doctor-slider mt-4">
              {/* <OwlCarousel className="owl-theme" {...options}> */}
               <Swiper
           //  autoplay={{ delay: 2500,  disableOnInteraction: false,}} 
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay,]}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    pagination: true
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3.1,
                    spaceBetween: 20

                }
            }} 
         >
                        {doctorArr.map((element) => {
                            return ( 
                            <SwiperSlide style={{overflow: "hidden"}}>
                        <div className=" bg-white" key={element.id} >
                                <img src={element.image} alt="doctor" className=" mx-auto img-fluid" style={{width: '100%'}} /> 
                                <div className="content mt-4">
                                      <p className="text-gray-700 text-start mb-1">
                                {element.dsc}
                                </p>
                                            <p className=''><strong>{element.name}</strong></p>
                                         
                                </div>
                          
                                    </div>
                                    </SwiperSlide>
                        )
                        })}
                   </Swiper>
                </div>
      </>
  )
}

export default EmpoweringContent1