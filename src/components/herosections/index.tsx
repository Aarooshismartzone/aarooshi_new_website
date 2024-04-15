'use client'
import { countries } from '@/utils/data';
import { Textarea, Button, Link, Input, Select, SelectItem } from '@nextui-org/react'
import React, { useState } from 'react'

export default function Herosection(props: any) {

    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [failure, setFailure] = useState<any>("")
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

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

    //data submission



    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true) // Set loading to true when the request starts

        try {
            const formData = new FormData(event.currentTarget);
            //console.log(formData);

            const formObject: { [key: string]: string } = {}

            formData.forEach((value, key) => {
                formObject[key] = value.toString()
            })
            console.log(formObject)

            const response = await fetch('https://busytiger.com/api/submitleadentry', { 
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('failure');
            }

            // Handle response if necessary
            const data = await response.json()
            console.log(data)
            // ...
        } catch (error) {
            // Handle error if necessary
            console.error('error is: ' + error);
            setSubmissionStatus('failure');
            setFailure(error)
        } finally {
            setIsLoading(false) // Set loading to false when the request completes
        }
    }

    return (
        <div className='bgdd'>
            <div className="hero-section">
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold sm:font-normal'>{props.title}</h1>
                <div className='mt-4 text-xs md:text-sm'>
                    <p>{props.para1}</p>

                    <p className='mt-2'>{props.para2}</p>
                </div>

                {submissionStatus === 'success' ? (
                    <>
                        <p className='mt-3 mb-3 lg:text-2xl md:text-xl text-lg text-blue-300'>{props.formresponse}</p>
                    </>
                ) : (
                    <>
                        <form className='mt-3' onSubmit={onSubmit}>
                            <input type='hidden' name='slug' value={props.slug} />
                            <p className='text-xl'>Fill this form</p>
                            <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-3'>
                                <div className='col-span-1 mt-4'>
                                    <Select
                                        variant="bordered"
                                        label="Select Country"
                                        className="max-w-xs"
                                        name='countrycode'
                                        classNames={{ trigger: 'border-green-400 hover:!border-white focus-within:!border-white' }}
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
                                        name='pnum'
                                        variant="bordered"
                                        label="Enter your 10-digit number"
                                        classNames={{
                                            label: '!text-white',
                                            inputWrapper: 'border-green-400 hover:!border-white focus-within:!border-white'
                                        }}
                                        className='max-w-xs mt-4' />
                                    <Input type="email"
                                        name='email'
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
                                        name='desc'
                                        size='lg'
                                        classNames={{
                                            label: '!text-white',
                                            inputWrapper: 'border-green-400 hover:!border-white focus-within:!border-white'
                                        }}
                                        className='max-w-xs mt-4 text-white'
                                    />
                                    <Button type='submit' color="primary" variant='bordered' className='mt-6 opacity-100' disabled={isLoading}>
                                        {isLoading ? 'Updating information...' : 'Create Magic'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                        <p>error is {failure}</p>
                    </>
                )}
                <div className='flex justify-end'>
                    <Link isBlock showAnchorIcon href="#" color="primary" target='_blank'>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    )
}
