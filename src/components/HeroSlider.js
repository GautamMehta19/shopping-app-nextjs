'use client'
import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide'

const HeroSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
    }

    const slidedata = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "trending Items",
            mainTitle: "WOMEN'S LATEST FAISON SALE",
            price: "$20"
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "trending Accessories",
            mainTitle: "MODERN SUN GLASSES",
            price: "$15"
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FAISON SUMMER SALE",
            price: "$30"
        },
    ]
    return (
        <div>
            <div className='container pt-6 lg:pt-0'>
                <Slider {...settings}>
                    {slidedata.map((item, index) => {
                        return (
                            <Slide
                                key={index}
                                img={item.img}
                                title={item.title}
                                mainTitle={item.mainTitle}
                                price={item.price}
                            />
                        )
                    })}

                </Slider>
            </div>
        </div>
    )
}

export default HeroSlider