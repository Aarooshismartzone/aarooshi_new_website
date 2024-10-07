'use client'
import { countries } from '@/utils/data';
import { Textarea, Button, Link, Input, Select, SelectItem } from '@nextui-org/react';
import React, { useState } from 'react';

export default function Herosection(props: any) {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [failure, setFailure] = useState<any>("");
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/\D/g, '');
        if (inputValue.length > 10) {
            inputValue = inputValue.slice(0, 10);
        }
        setValue(inputValue);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch('https://busytiger.com/api/submitleadentry', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmissionStatus('success');
            } else {
                throw new Error('Failed to submit form');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
            setSubmissionStatus('failure');
            setFailure(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='bgdd'>
            <div className="hero-section">
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold sm:font-normal'>{props.title}</h1>
                <div className='mt-4 text-xs md:text-sm'>
                    <p>{props.para1}</p>
                    <p className='mt-2'>{props.para2}</p>
                </div>

                {submissionStatus === 'success' ? (
                    <p className='mt-3 mb-3 lg:text-2xl md:text-xl text-lg text-blue-300'>{props.formresponse}</p>
                ) : (
                    <form className='mt-3' onSubmit={handleSubmit}>
                        <input type='hidden' name='slug' value={props.slug} />
                        <p className='text-xl'>Fill this form</p>
                        <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-3'>
                            <div className='col-span-1 mt-4'>
                                <Select
                                    variant="bordered"
                                    label="Select Country"
                                    className="max-w-xs"
                                    name='countrycode'
                                    classNames={{ trigger: 'border-[#712C82] focus-within:!border-white' }}
                                >
                                    {countries.map((country) => (
                                        <SelectItem key={country.name} value={country.code} textValue={country.name}>
                                            {country.name} - {country.code}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <Input
                                    type="text"
                                    value={value}
                                    onChange={handleChange}
                                    name='pnum'
                                    variant="bordered"
                                    label="Enter your 10-digit number"
                                    classNames={{
                                        label: '!text-white',
                                        inputWrapper: 'border-[#712C82] focus-within:!border-white'
                                    }}
                                    className='max-w-xs mt-4'
                                />
                                <Input
                                    type="email"
                                    name='email'
                                    variant="bordered"
                                    label="Enter your Email address (optional)"
                                    classNames={{
                                        label: '!text-white',
                                        inputWrapper: 'border-[#712C82] focus-within:!border-white'
                                    }}
                                    className='max-w-xs mt-4'
                                />
                            </div>
                            <div className="col-span-1">
                                <Textarea
                                    label="Enter details"
                                    variant="bordered"
                                    name='desc'
                                    size='lg'
                                    classNames={{
                                        label: '!text-white',
                                        inputWrapper: 'border-[#712C82] focus-within:!border-white'
                                    }}
                                    className='max-w-xs mt-4 text-white'
                                />
                                <Button
                                    type='submit'
                                   // color="primary"
                                    variant='bordered'
                                    className='mt-6 opacity-100 bg-[#712C82] border-none text-white'
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Updating information...' : 'Create Magic'}
                                </Button>
                            </div>
                        </div>
                    </form>
                )}
                <p>{submissionStatus === 'failure' && `Error: ${failure}`}</p>
                <div className='flex justify-end'>
                    <Link isBlock showAnchorIcon href="#" target='_blank' className='font-bold text-white'>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    );
}
