'use client'
import React from 'react';
import '../style.scss'
import Topbar from '@/components/topbar';
import Topiclist from '@/components/topiclist';
import { Service } from '../info';
import Herosection from '@/components/herosections';

export default function Page({ params }: { params: { service: string } }) {

    const serv = Service.filter(u => u.slug === params.service)

    const isSmallScreen = window.innerWidth < 768;

    return (
        <>
            {serv.map((s) => {
                return (
                    <>
                        <title>{s.title}</title>
                        <Topbar name={s.title} />
                        {isSmallScreen ? (
                            <Herosection title={s.title} para1={s.para1} para2={s.para2} formresponse={s.formresponse} />
                        ) : (
                            <div className='belowtopbar'>
                                <Topiclist />
                                <Herosection title={s.title} para1={s.para1} para2={s.para2} slug={s.slug} formresponse={s.formresponse} />
                            </div>
                        )}
                    </>
                )
            })}
        </>
    );
}


