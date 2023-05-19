import { Carousel } from 'react-carousel-minimal';
import './style.scss'
import image1 from './../Slider/header.png'
import image2 from './../Slider/Rectangle11.png'
import image3 from './../Slider/Rectangle12.png'
import image4 from './../Slider/Rectangle13.png'
import image5 from './../Slider/Rectangle14.png'
const Slider = ()=> {
 const data = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,

    },
    {
      image: image4,

    },
    {
        image: image5,
  
      },
 
  ];


  return (
    <div className="carousel">
           <div>
        <div>
          <Carousel
            data={data}
            time={0}
            width="850px"
            height="500px"
            radius="10px"
            slideNumber={false}
            captionPosition="bottom"
            automatic={false}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="0px"
            slideBackgroundColor="none"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
                display: "flex",
                flexDirection: "column",
              textAlign: "center",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Slider;