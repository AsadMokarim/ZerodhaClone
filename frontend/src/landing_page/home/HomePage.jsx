import React from 'react';

import Hero from "./Hero";
import Awards from './Awards';
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from './Education';
import OpenAccount from '../common/OpenAccount';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';



function HomePage() {
    return (
        <>

            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />

        </>
    );
}

export default HomePage;