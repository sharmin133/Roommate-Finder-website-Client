import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoPlay = () => {

     const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode:true,
        centerPadding:'20px'
        
        
      };

  const images = [
   "/AllPictures/header-banner.jpg",
    "/AllPictures/3d-rendering-loft-luxury-living-room-with-bookshelf.jpg",
    "/AllPictures/banner3.webp",
    "/AllPictures/banner2.jpg",
     
    
  ];
    return (
       <div className="slider-container shadow">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}className="flex justify-center" >
            <img className="p-4 rounded-4xl w-full object-cover h-[90vh]" src={src} alt=''/>
          </div>
        ))}
      </Slider>
    </div>
    );
};

export default AutoPlay;