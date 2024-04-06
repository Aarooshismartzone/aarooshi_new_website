import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { LuPhoneCall } from 'react-icons/lu'
import { MdEmail, MdLocationPin } from 'react-icons/md'

export default function GetInTouch() {
    return (
        <>
            <div className='bgdd'>
                <div className="hero-section">
                    <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-lg'>Get In Touch</h1>
                    <p className='text-xl mt-4 text-violet-300'>Believe it or not, we love it when you get in touch with us.
                    </p>
                    <div className='mt-4'>
                        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2'>
                            <div className='col-span-1'>
                                <a href='tel:+918697618476'>
                                    <Card className='border-2 border-white bg-transparent'>
                                        <CardBody className='text-white text-center'>
                                            <LuPhoneCall className='text-2xl mx-auto text-orange-600' />
                                            <p className='mt-3'>Call Us</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            </div>
                            <div className='col-span-1'>
                                <a href='mailto:contact@aarooshi.com'>
                                    <Card className='border-2 border-white bg-transparent'>
                                        <CardBody className='text-white text-center'>
                                            <MdEmail className='text-2xl mx-auto text-blue-600' />
                                            <p className='mt-3'>Email Us</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            </div>
                            <div className='col-span-1'>
                                <a href='https://maps.app.goo.gl/eG2F2nzzbQAQcwEi7' target='_blank'>
                                    <Card className='border-2 border-white bg-transparent'>
                                        <CardBody className='text-white text-center'>
                                            <MdLocationPin className='text-2xl mx-auto text-yellow-600' />
                                            <p className='mt-3'>Our Address</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            </div>
                            <div className='col-span-1'>
                                <a href='https://wa.me/+918697618476' target='_blank'>
                                    <Card className='border-2 border-white bg-transparent'>
                                        <CardBody className='text-white text-center'>
                                            <FaSquareWhatsapp className='text-2xl mx-auto text-green-600' />
                                            <p className='mt-3'>Whatsapp Us</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className='text-xl mt-4 text-violet-300'>
                        
                    </p>
                </div>
            </div>
        </>
    )
}
