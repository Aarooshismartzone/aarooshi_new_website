'use client'
import { Card, CardBody, Link, Tab, Tabs } from '@nextui-org/react'
import React from 'react'

export default function About() {

    return (
        <div className='bgdd'>
            <div className="hero-section">
                <h1 className='lg:text-3xl md:text-2xl sm:text-xl text-lg'>About Us</h1>
                <p className='text-xl mt-4 text-violet-300'>Welcome to Aarooshi, where innovation meets excellence.
                </p>
                <p className='mt-2 font-bold'>Aimed to bring a digital transformation in businesses, Aarooshi
                    is a team of passionate tech-lovers. We understand the fact that there are different
                    types of businesses, and thus aim to create the best website suited for a particular
                    type of business. When a person or a team decides to open a business- be it a startup or some regular business,
                    they take a huge risk just to fulfill a dream. They invest a good amount of money and time for this purpose. At Aarooshi,
                    we understand the importance of a client's dream and the fact that their business does matter. Their business
                    matters to us, to the customers, and to the society and economy as a whole. So, we take extra
                    care while weaving their websites and mobile applications.
                    We have collaborated with an SEO team that takes care of the marketing part.</p>

                {/* CARD */}

                <div className="flex w-full flex-col mt-3">
                    <Tabs color='secondary' aria-label="Options" variant='bordered' classNames={{ tabContent: 'text-white' }}>
                        <Tab key="mission" title="Our Mission">
                            <Card className='bg-transparent border-slate-300 text-slate-300 border-2'>
                                <CardBody>
                                    At Aarooshi, our mission is to empower businesses of all sizes to thrive in the digital age. We
                                    believe that every company deserves a strong online presence and cutting-edge technology to succeed
                                    in today's competitive market. Our goal is to provide top-notch website and app development services
                                    tailored to our clients' unique needs, helping them achieve their objectives and exceed their expectations.
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="distinction" title="What sets us apart">
                            <div className='grid grid-cols-4 gap-2'>
                                <div className='col-span-1'>
                                    <Card className='bg-transparent border-purple-300 text-purple-300 border-2'>
                                        <CardBody className='text-center'>
                                            <div className='text-xl'>Expertise</div>
                                            <p className='mt-2'>Our team consists of skilled professionals who are experts in their respective fields, and help in delivering exceptional results.</p>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className='col-span-1'>
                                    <Card className='bg-transparent border-yellow-300 text-yellow-300 border-2'>
                                        <CardBody className='text-center'>
                                        <div className='text-xl'>Innovation</div>
                                        <p className='mt-2'>We stay ahead of the curve by constantly exploring new technologies and trends in the digital landscape.</p>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className='col-span-1'>
                                    <Card className='bg-transparent border-green-300 text-green-300 border-2'>
                                        <CardBody className='text-center'>
                                        <div className='text-xl'>Collaboration</div>
                                        <p className='mt-2'>We believe in the power of collaboration and work closely with our clients to understand their goals, challenges, and vision.</p>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className='col-span-1'>
                                    <Card className='bg-transparent border-cyan-300 text-cyan-300 border-2'>
                                        <CardBody className='text-center'>
                                        <div className='text-xl'>Quality</div>
                                        <p className='mt-2'>Quality is at the heart of everything we do- from framing the initial concept to delivering the final product to our clients.</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </Tab>

                        <Tab key="team" title="Our Team">
                            <Card className='bg-transparent border-pink-300 text-pink-300 border-2'>
                                <CardBody>
                                    The journey had begun from a single soul. Today, Aarooshi has a huge team that includes website developers,
                                    mobile app developers, content writers, graphics designers and many more. Each and every team member is specialized in 
                                    their respective fields, but work with just one goal- to bring out the best.
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>


                <div className='flex justify-end'>
                    <Link isBlock showAnchorIcon href="#" color="primary" target='_blank'>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    )
}
