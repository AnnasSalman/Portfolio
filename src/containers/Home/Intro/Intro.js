import React from 'react'
import {Flex, Box, Text, useMediaQuery} from "@chakra-ui/react";


import Lottie from 'react-lottie'
import workAnimation from '../../../assets/animations/lf30_editor_j4f9fcus.json'
import mobileAnimation from '../../../assets/animations/44644-mobile-unlock-code.json'
import reactLogoAnimation from '../../../assets/animations/lf30_editor_rkaf2znc.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";



import TextLoop from "react-text-loop";

const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    fade: true,
    autoplaySpeed: 3500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
};

const Intro = props => {

    const [isLargerThanTablet] = useMediaQuery("(min-width: 768px)")

    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return(
        <Flex h={'100vh'}>
            <Box
                w={['100%', '85%', '80%']}
                h={'100%'} left={['0%', '0%', '-12%']}
                bottom={0}
                alignItems={'center'}
                justifyContent={'center'}
                position={'absolute'}
                overflow={'hidden'}>
                <Slider {...sliderSettings} style={{height: '100%'}}>
                    <Flex h={'100vh'}>
                        <Lottie options={{...defaultOptions, animationData: workAnimation}}
                                isClickToPauseDisabled={true}
                                isStopped={false}
                                isPaused={false}/>
                    </Flex>
                    <Flex h={'100vh'}>
                        <Lottie options={{...defaultOptions, animationData: mobileAnimation}}
                                width={isLargerThanTablet?'50%':'100%'}
                                isClickToPauseDisabled={true}
                                isStopped={false}
                                isPaused={false}/>
                    </Flex>
                    <Flex h={'100vh'}>
                        <Lottie options={{...defaultOptions, animationData: reactLogoAnimation}}
                                width={isLargerThanTablet?'60%':'100%'}
                                isClickToPauseDisabled={true}
                                isStopped={false}
                                isPaused={false}/>
                    </Flex>
                </Slider>
            </Box>
            <Flex
                ml={['5%','15%', '46%']}
                direction={"column"}
                justifyContent={"center"}
                h={"100%"} zIndex={'docked'}
                width={['90%','65%','45%']}
                pb={'3%'}>
                <Flex alignItems={'center'} mb={5}>
                    <Box w={7} h={7} bgColor={'brand.primary'} borderRadius={15} position={'absolute'}/>
                    <Text fontSize={["sm", "md"]} fontWeight={'bold'} zIndex={'docked'} ml={4}>Hello, I'm Annas Salman</Text>
                </Flex>
                <Text fontSize={["4xl", "4xl", "5xl"]}>I'm a</Text>
                <Flex direction={["column", 'row', 'row']}>
                    <TextLoop>
                        {
                            ['React', 'React Native', 'Full Stack', 'MERN Stack'].map((item)=>{
                                return(
                                    <Text
                                        fontSize={["4xl", "4xl", "5xl"]}
                                        fontWeight={'black'}
                                        textShadow={["1px 1px #0f0f0f", "1px 1px #0f0f0f", "0px 0px #0f0f0f"]}
                                        color={'brand.primary'}>
                                        {item}
                                    </Text>
                                )
                            })
                        }
                        {/*<Text fontSize={["4xl", "4xl", "5xl"]} fontWeight={'black'} color={'brand.primary'}>React </Text>*/}
                        {/*<Text fontSize={["4xl", "4xl", "5xl"]} fontWeight={'black'} color={'brand.primary'}>React Native</Text>*/}
                        {/*<Text fontSize={["4xl", "4xl", "5xl"]} fontWeight={'black'} color={'brand.primary'}>Full Stack</Text>*/}
                        {/*<Text fontSize={["4xl", "4xl", "5xl"]} fontWeight={'black'} color={'brand.primary'}>MERN Stack</Text>*/}
                    </TextLoop>
                    <Text
                        fontSize={["4xl", "4xl", "5xl"]}
                        fontWeight={'black'}
                        color={'brand.primary'}
                        textShadow={["1px 1px #0f0f0f", "1px 1px #0f0f0f", "0px 0px #0f0f0f"]}
                        ml={[0, 0, 2]}>
                        {' '}Developer
                    </Text>
                </Flex>
                <Text fontSize={["4xl", "4xl", "5xl"]} fontWeight={'black'}>Based in Islamabad</Text>
            </Flex>
        </Flex>
    )
}

export default Intro
