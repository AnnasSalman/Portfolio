import React, {useState, useRef} from 'react'
import {Box, Flex} from "@chakra-ui/react";

import Lottie from "lottie-react";
import menu from '../../assets/animations/lf30_editor_q4mkwhnu.json'

import Intro from "./Intro/Intro";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";


const Home = props => {

    const [menuOpened, setMenuOpened] = useState(false)

    const onMenuClick = () => {
        setMenuOpened(!menuOpened)
    }

    return(
        <Box bg="brand.background">
            <Intro/>
            <Menu menuOpened={menuOpened}/>
            <Header menuOpened={menuOpened} onMenuClick={onMenuClick}/>
            <Flex h={'100vh'} w={'100%'} bgColor={'yellow.200'}/>
        </Box>
    );
};

export default Home;
