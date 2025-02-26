"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../styles/CustomCss/CustomStyle.css';
import Link from "next/link";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
        slidesToSlide: 1,
        draggable:true // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 124 },
        items: 1,
        slidesToSlide: 1,
        draggable:true // optional, default to 1.
    }
};
const sliderImageUrl = [

    {
        url:"/Images/fleet1.jpg",
        head: "Fleet Management System",
        link: "products/fleet-management"
    },
    {
        url:"/Images/CrewBg1.jpg",
        head: "Crew Management System",
        link: "products/Crew-Management-System"
    },

    {
        url:"/Images/QhsseBg1.jpg",
        head: "QHSSE",
        link: "products/QHSSE"
    },

    {
        url:"/Images/Maintenance1.jpg",
        head: "Planned Maintenance System",
        link: "products/Planned-Maintenance-System"
    },

    {
        url:"/Images/certBg.jpg",
        head: "Certificate Management System",
        link: "products/Vessel-Certificate-Management-System"
    },
    {
        url:"/Images/ecloudBg1.jpg",
        head: "E Cloud",
        link: "products/ECloud"
    },

    {
        url:"/Images/InvenBg1.jpg",
        head: "Supply Chain Management",
        link: "products/supply-Chain"
    },

    {
        url:"/Images/DMSBg1.jpg",
        head: "E-Document Management System",
        link: "products/Electronic-Document-Management-System"
    },

    {
        url:"/Images/FleetAppBg1.jpg",
        head: "Nauserver Mobile Apps",
        link: "products/Fleet-Performance-Mobile-App"
    },

    {
        url: "/Images/PowerBi1.jpg",
        head: "Orion Business Intelligence",
        link: "products/Orion-Bi"
    }
];
const CarouselProduct = () => {
    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={5000}
                keyBoardControl={false}
                transitionDuration={1000}
                containerClass="carousel-container"
                //removeArrowOnDeviceType={["tablet", "mobile"]}
                ssr={false}
                swipeable={false}
                draggable={false}
                showDots={false}
                infinite={true}
                partialVisible={false}

            >
                {sliderImageUrl.map((Experties, index) => {
                    return (
                        <div className="section" key={index} >
                            <div className="slider" key={index}>
                                <img src={Experties.url} alt="Orion Experties" />

                                <div className="content">
                                    <h3 className="ExpHead">{Experties.head}</h3>
                                    <span>
                                        <Link className="ReadMoreL" href={`/${Experties.link}`}>Read More
                                            <div className="button-link-icon-16 w-embed ReadMoreArr" aria-hidden="true">
                                                <svg height="100%" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path d="M0 10.6L4.6 6L0 1.4L1.4 0L7.4 6L1.4 12L0 10.6Z" fill="currentcolor" aria-hidden="true"></path>
                                                </svg></div>
                                        </Link>
                                    </span>
                                </div>

                            </div>

                        </div>

                    );
                })}
            </Carousel>
        </div>
    );
};
export default CarouselProduct;
