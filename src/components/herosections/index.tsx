'use client'
import { countries } from '@/utils/data';
import { Textarea, Button, Link, Input, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'

export default function Herosection(props: any) {

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
        <div className='bgdd'>
            <div className="hero-section">
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-lg'>{props.title}</h1>
                <div className='mt-4'>
                    <p>{props.para1}</p>

                    <p className='mt-2'>{props.para2}</p>
                </div>
                <form className='mt-3'>
                    <p className='text-xl'>Fill this form</p>
                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-3'>
                        <div className='col-span-1 mt-4'>
                            <Select
                                variant="bordered"
                                label="Select Country"
                                className="max-w-xs"
                                name='countrycode'
                                classNames={{ mainWrapper: 'border-green-400 hover:!border-white focus-within:!border-white' }}
                            >
                                {countries.map((country) => (
                                    <SelectItem key={country.name} value={country.code} textValue={country.name}>
                                        {country.name} - {country.code}
                                    </SelectItem>
                                ))}
                            </Select>
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
                        </div>
                        <div className="col-span-1">
                            <Textarea
                                label="Enter details"
                                variant="bordered"
                                classNames={{
                                    label: '!text-white',
                                    inputWrapper: 'border-green-400 hover:!border-white focus-within:!border-white'
                                }}
                                className='max-w-xs mt-4'
                            />
                        </div>
                    </div>
                    <Button color="primary" variant='bordered' className='mt-4 opacity-100'>
                        Create Magic!
                    </Button>
                </form>
                <div className='flex justify-end'>
                    <Link isBlock showAnchorIcon href="#" color="primary" target='_blank'>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    )
}
