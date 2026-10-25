import React from 'react';
import OpenAccount from '../common/OpenAccount';
import Hero from './Hero';
import InvestmentOptions from './InvestmentOptions';
import Steps from './Steps';

export default function SignUpPage() {
    return (
        <>
            <Hero />
            <InvestmentOptions />
            <Steps />


            <OpenAccount />
        </>
    )
}