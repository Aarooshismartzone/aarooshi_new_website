"use client"
import React, { useEffect, useState } from 'react';
import '../style.scss';
import Topbar from '@/components/topbar';
import Topiclist from '@/components/topiclist';
import { Service } from '../info';
import Herosection from '@/components/herosections';

interface PageProps {
    params: { service: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const serv = Service.filter(u => u.slug === params.service);

    return (
        <>
            {serv.map((s) => (
                <React.Fragment key={s.slug}>
                    <title>{s.title}</title>
                    <Topbar name={s.title} />
                    {isSmallScreen ? (
                        <Herosection
                            title={s.title}
                            para1={s.para1}
                            para2={s.para2}
                            formresponse={s.formresponse}
                        />
                    ) : (
                        <div className='belowtopbar'>
                            <Topiclist />
                            {/* <Herosection
                                title={s.title}
                                para1={s.para1}
                                para2={s.para2}
                                slug={s.slug}
                                formresponse={s.formresponse}
                            /> */}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </>
    );
};

export default Page;
