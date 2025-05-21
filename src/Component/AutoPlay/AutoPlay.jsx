import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AutoPlay = () => {

     const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
    "/AllPictures/header-banner.jpg",
     "/AllPictures/header-banner.jpg"
    
  ];
    return (
       <div className="slider-container shadow">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} >
            <img className="p-4 rounded-4xl " src={src} alt=''/>
          </div>
        ))}
      </Slider>
    </div>
    );
};

export default AutoPlay;