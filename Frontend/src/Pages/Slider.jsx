import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import sliderstyle from "./Slider.module.css"
// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(<Slider/>|| null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1664231317_Dal-and-pulses_1680x320.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1663587688_REV_Main_Banner-1680-x-320_100kb.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1664230674_Deodorant_fest-1680-320.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1664233380_1663771909_Cleaning-Fest_1680x320.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1663514641_Sep-19_Banner-1_web.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1664232277_1663770551_1662563791_1661275553_1661112546_1660758642_Organic-Range-for-Healthy-Diet_1680-x-320.jpg',
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1663760754_Web_Mumbai_PremiumFruits.jpg'
  ];

  return (
    <Box   className={sliderstyle.mainsliderdiv}
    marginTop={'120px'}
      position={'relative'}
      height={'330px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
       // colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box  className={sliderstyle.sliderdiv}
            key={index}
            height={'330px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
            marginTop="10px"
          />
        ))}
      </Slider>
    </Box>
  );
}