import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Hero from './Hero';
import Brokerage from "./Brokerage";
import OpenAccount from "../common/OpenAccount"
import EquityTable from './EquityTable';


export default function PricingPage() {
    return (
        <>

            <Hero />
            <EquityTable />
            <OpenAccount />
            {/* <Brokerage /> */}


        </>
    )
}
