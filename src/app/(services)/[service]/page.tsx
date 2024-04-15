"use client"
import React, { useEffect } from 'react';
import '../style.scss';
import Topbar from '@/components/topbar';
import Topiclist from '@/components/topiclist';
import { Service } from '../info';
import Herosection from '@/components/herosections';

interface PageProps {
    params: { service: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
    useEffect(() => {
        const checkScreenSize = () => {
            const isSmallScreen = window.innerWidth < 768;
            const elements = document.getElementsByClassName('belowtopbar') as HTMLCollectionOf<HTMLElement>;
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.display = isSmallScreen ? 'none' : 'block';
            }
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
                    <div className='belowtopbar'>
                        <Topiclist />
                        <Herosection
                            title={s.title}
                            para1={s.para1}
                            para2={s.para2}
                            slug={s.slug}
                            formresponse={s.formresponse}
                        />
                    </div>
                </React.Fragment>
            ))}
        </>
    );
};

export default Page;
