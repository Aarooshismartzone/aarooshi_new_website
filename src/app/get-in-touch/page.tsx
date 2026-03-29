'use client'
import React from 'react';
import './style.scss'
import Topbar from '@/components/topbar';
import GetInTouch from '@/components/herosections/get-in-touch';
import Topiclist from '@/components/topiclist';



export default function Page() {

    return (
        <>
            <Topbar name="Get In Touch" />
            <div className='belowtopbar'>
                <Topiclist />
                <GetInTouch />
            </div>
            <div className='md:hidden block abovetopbar'>
                <GetInTouch />
            </div>
        </>
    );
}