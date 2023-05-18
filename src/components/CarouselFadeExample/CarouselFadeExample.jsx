import Carousel from 'react-bootstrap/Carousel';
import img from './../Card/massimo-rosso-min.png'
function CarouselFadeExample() {
  return (
    <Carousel style={{width:"50%"}}fade indicators={false}>
      <Carousel.Item style={{display: 'flex'}}>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-50"
          src={img}
          alt="First slide"
        />

       
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;