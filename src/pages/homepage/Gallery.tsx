import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import pic1 from "../../assets/images/landingPic1.jpg";
import pic2 from "../../assets/images/landingPic2.jpg";
import pic3 from "../../assets/images/landingPic3.jpg";
import pic4 from "../../assets/images/landingPic4.jpg";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          <One>
            <img src={pic4} alt="" />
          </One>
          <One>
            <img src={pic3} alt="" />
          </One>
          <One>
            <img src={pic2} alt="" />
          </One>
          <One>
            <img src={pic1} alt="" />
          </One>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Gallery;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: flex;
  overflow-x: scroll; */
  overflow: hidden;
`;
const One = styled.div`
  width: 500px;
  height: 55vh;
  position: relative;

  @media screen and (max-width: 460px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #03b90326;
    z-index: 4;
    position: absolute;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;
