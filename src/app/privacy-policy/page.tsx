'use client'
import React from 'react';
import PrivacyPolicy from '@/components/herosections/privacy-policy';
import Topbar from '@/components/topbar';
import Topiclist from '@/components/topiclist';
import './style.scss';

export default function Page() {
  return (
    <>
      <Topbar name="Privacy Policy" />
      <div className='belowtopbar'>
        <Topiclist />
        <PrivacyPolicy />
      </div>
      <div className='md:hidden block abovetopbar'>
        <PrivacyPolicy />
      </div>     
      {/* <p>Privacy Policy</p>
      <p>Privacy policy comes here</p> */}
    </>
  );
}

