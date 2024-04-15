import React, { useEffect, useState } from 'react';
import '../style.scss';
import Topbar from '@/components/topbar';
import Topiclist from '@/components/topiclist';
import { Service } from '../info';
import Herosection from '@/components/herosections';

export default function Page({ params }: { params: { service: string } }) {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        // Check screen width on component mount
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        checkScreenSize();

        // Event listener to update screen size state on window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup event listener on component unmount
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
                        <Herosection title={s.title} para1={s.para1} para2={s.para2} formresponse={s.formresponse} />
                    ) : (
                        <div className='belowtopbar'>
                            <Topiclist />
                            <Herosection title={s.title} para1={s.para1} para2={s.para2} slug={s.slug} formresponse={s.formresponse} />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </>
    );
}
