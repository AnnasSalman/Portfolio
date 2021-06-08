import React, {useRef, useState} from 'react'
import {Flex, Image, Text, Box, Button} from "@chakra-ui/react";

import logo from '../../assets/logos/mainLogo.png'
import menuButton from '../../assets/animations/lf30_editor_vrxkddkz.json'
import Lottie from "lottie-react";

const menuOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Header = props => {

    const menu = useRef(null)
    const [paused, setPaused] = useState(true)
    const [menuSegments, setMenuSegments] = useState([0,13])

    const onMenuClick = () => {
        console.log('menu clicked')
        props.menuOpened
            ? menu.current.playSegments([70, 140],true)
            : menu.current.playSegments([0, 70],true)
        props.onMenuClick()
        // menu.current.playSegments([1, 70], false)
        // setMenuSegments([0,30])
        // menu.current.goToAndStop(menu.current.totalFrames, true);
    }

    return(
        <Flex w={'100%'} h={['10vh', '15vh']} paddingX={'5%'} pos={'fixed'} top={0} alignItems={'center'} justifyContent={'space-between'} zIndex={'popover'}>
            {/*<Image src={logo} h={'50%'} ml={'3%'}/>*/}
            <Flex direction={'column'}>
                <Text fontSize={'bold'} fontSize={'xl'} lineHeight={1} color={'gray.700'}>ANNAS</Text>
                <Text textAlign={'center'}>SALMAN</Text>
                <Box w={'100%'} h={1.5} bgColor={'brand.primary'}/>
            </Flex>
            <Flex
                onClick={onMenuClick}
                zIndex={10}
                as={'button'}
                borderRadius={20}
                width={20}
                bgColor={'brand.background'}
                justifyContent={"center"}>
                <Lottie
                    style={{width: '60%'}}
                    animationData={menuButton}
                    lottieRef={menu}
                    autoplay={false}
                    loop={false}
                />
            </Flex>
        </Flex>
    );
};

export default Header;
