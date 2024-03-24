'use client'
import React from 'react';
import './style.scss'
import Topbar from '@/components/topbar';
import Topiclist from '@/components/topiclist';
import About from '@/components/herosections/about';



export default function Page() {  

    return (
        <>
            <Topbar name="About Aarooshi" />
            <div className='belowtopbar'>
                <Topiclist />
                <About />
            </div>
            <div className='md:hidden block'>
            <About />
            </div>
        </>
    );
}