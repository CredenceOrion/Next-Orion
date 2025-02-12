
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container, Row, Col } from 'react-bootstrap';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items:5,
        swipeable:false,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 4,
        slidesToSlide: 1,
       // draggable:true // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 767, min: 124 },
        items: 2,
        slidesToSlide: 1,
        //draggable:true // optional, default to 1.
    }
};

const ClientList=[
    {
        id:1,
        Clientlogo: "/Images/ClientLogo/Blt.png"
    },
    {
        id:2,
        Clientlogo: "/Images/ClientLogo/Thome.png"
    },
    {
        id:3,
        Clientlogo: "/Images/ClientLogo/AQ.png"
    },
    {
        id:4,
        Clientlogo: "/Images/ClientLogo/Arena.png"
    },
    {
        id:5,
        Clientlogo: "/Images/ClientLogo/Bumiarmada.png"
    },
    {
        id:6,
        Clientlogo: "/Images/ClientLogo/Darya.png"
    },
    {
        id:7,
        Clientlogo: "/Images/ClientLogo/Asian.png"
    },{
        id:8,
        Clientlogo: "/Images/ClientLogo/Greateastern.png"
    },
    {
        id:9,
        Clientlogo: "/Images/ClientLogo/Karco.png"
    },
    {
        id:10,
        Clientlogo: "/Images/ClientLogo/Krishnan2.png"
    },
    {
        id:11,
        Clientlogo: "/Images/ClientLogo/Mideast.png"
    },
    {
        id:12,
        Clientlogo: "/Images/ClientLogo/Sandigan.png"
    },
    {
        id:13,
        Clientlogo: "/Images/ClientLogo/Osmc.png"
    },
    {
        id:14,
        Clientlogo: "/Images/ClientLogo/Uacc.jpg"
    },
]
function ClientListComponent(){

return(
    <>
    <Container className='mb-3'>
    <Row>
        <Col xs={12} className="OurClients">
    
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}
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
                arrows={false}

            >
{ClientList.map(clientlist=>(
      <div className='m-r-10' key={clientlist.id}>
       <img src={clientlist.Clientlogo} alt={clientlist.Clientlogo} className="img-fluid"/>
      </div>
      ))}

            </Carousel>
           
    
        
      </Col>
      </Row>
      </Container>
    </>
)


}

export default ClientListComponent;