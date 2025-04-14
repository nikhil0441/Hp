import Carousel from "react-bootstrap/Carousel";
import myimages1 from "../Images/image1.jpeg";
import myimages2 from "../Images/image2.jpeg";
import myimages3 from "../Images/image3.jpeg";
const TopBanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="" /> */}
          <img src={myimages1} alt="" width="100%" height={500} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="" /> */}
          <img src={myimages2} alt="" width="100%" height={500} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="" /> */}
          <img src={myimages3} alt="" width="100%" height={500} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default TopBanner;
