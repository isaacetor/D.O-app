"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_slick_1 = __importDefault(require("react-slick"));
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
const styled_components_1 = __importDefault(require("styled-components"));
const landingPic1_jpg_1 = __importDefault(require("../../assets/images/landingPic1.jpg"));
const landingPic2_jpg_1 = __importDefault(require("../../assets/images/landingPic2.jpg"));
const landingPic3_jpg_1 = __importDefault(require("../../assets/images/landingPic3.jpg"));
const landingPic4_jpg_1 = __importDefault(require("../../assets/images/landingPic4.jpg"));
const Gallery = () => {
    const settings = {
        infinite: true,
        centerPadding: "60px",
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 2500,
        slidesToShow: 3.2,
        slidesToScroll: 1,
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
                    autoplay: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
    };
    return (<Container>
      <Wrapper>
        <react_slick_1.default {...settings}>
          <One>
            <img src={landingPic4_jpg_1.default} alt=""/>
          </One>
          <One>
            <img src={landingPic3_jpg_1.default} alt=""/>
          </One>
          <One>
            <img src={landingPic2_jpg_1.default} alt=""/>
          </One>
          <One>
            <img src={landingPic1_jpg_1.default} alt=""/>
          </One>
        </react_slick_1.default>
      </Wrapper>
    </Container>);
};
exports.default = Gallery;
const Wrapper = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const One = styled_components_1.default.div `
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
const Container = styled_components_1.default.div `
  width: 100%;
  margin-top: 40px;

  @media screen and (max-width: 375px) {
    margin-top: 20px;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 320px) {
    margin-top: 0px;
    margin-bottom: 120px;
  }
`;
