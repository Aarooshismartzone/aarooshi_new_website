'use client'
import { Button, Input, Switch, Textarea } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { GiSundial } from "react-icons/gi";
import { GiMoonClaws } from "react-icons/gi";
import './style.scss'
import Topbar from '@/components/topbar';
import Topiclist from '@/components/topiclist';



export default function Page() {

    const [value, setValue] = useState('');

    const handleChange = (e: any) => {
        let inputValue = e.target.value;
        // Remove non-digit characters
        inputValue = inputValue.replace(/\D/g, '');
        // Truncate input value to 10 digits
        if (inputValue.length > 10) {
            inputValue = inputValue.slice(0, 10);
        }
        setValue(inputValue);
    };

    return (
        <>
            <Topbar />
            <div className='grid grid-cols-5 grid-flow-col z-0'>
                <Topiclist />
                <div className='bgdd'>
                    <div className="hero-section">
                        <h1 className='text-3xl'>E-Commerce Website</h1>
                        <div className='mt-4'>
                            <p>An e-commerce website is one of the most needed aspects for businesses that deal with the sale of products and services. While
                                offline shops expose you just to the people of your locality, online stores would help you get customers on a much larger scale.
                                Also, it helps you reduce your infrastructure costs as there is no physical shop involved.</p>

                            <p>So if you are looking to get a new e-commerce website, or revamp your old website, just fill your information
                                below and our team will get in touch with you as quick as possible.</p>
                        </div>
                        <form className='mt-3'>
                            <p className='text-xl'>Fill this form</p>
                            <Input type="text"
                                value={value}
                                onChange={handleChange}
                                variant="bordered"
                                label="Enter your 10-digit number"
                                classNames={{
                                    label: '!text-white',
                                    inputWrapper: 'border-green-400 hover:!border-white focus-within:!border-white'
                                }}
                                className='max-w-xs mt-4' />
                            <Input type="email"
                                variant="bordered"
                                label="Enter your Email address (optional)"
                                classNames={{
                                    label: '!text-white',
                                    inputWrapper: 'border-green-400 hover:!border-white focus-within:!border-white'
                                }}
                                className='max-w-xs mt-4' />
                            <Textarea
                                label="Enter details"
                                variant="bordered"
                                classNames={{
                                    label: '!text-white',
                                    inputWrapper: 'border-green-400 hover:!border-white focus-within:!border-white'
                                }}
                                className='max-w-xs mt-4'
                            />
                            <Button color="primary" variant="shadow" className='mt-4 opacity-100'>
                                Create Magic!
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}