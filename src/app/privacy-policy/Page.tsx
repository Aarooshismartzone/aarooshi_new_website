import React from 'react';
import './style.scss'
import PrivacyPolicy from '@/components/privacy-policy';
import Topbar from '@/components/topbar';
import Topiclist from '@/components/topiclist';

export default function Page() {
  return (
    <>
    <main>
                <Topbar name="Privacy Policy" />
                <div className='belowtopbar'>
                    <Topiclist />
                    <PrivacyPolicy/>
                </div>
                <div className='md:hidden block abovetopbar'>
                    <PrivacyPolicy/>
                </div>
            </main>
    </>
  );
}

