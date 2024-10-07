import React, { useState } from 'react'
import { GiHamburgerMenu, GiMoonClaws } from "react-icons/gi";
import './style.scss'
import { Button, Link, Switch } from '@nextui-org/react';
import Image from 'next/image';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { BsInfoSquareFill, BsTwitterX } from 'react-icons/bs';
import Drawer from '@mui/material/Drawer';
import { CgWebsite } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";
import { GiLetterBomb, GiShoppingCart } from "react-icons/gi";
import { IoReader } from "react-icons/io5";
import { MdOutlineAppShortcut, MdOutlineWeb } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";

export default function Topbar(title: any) {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <div className='top-class'>
                <div className='md:flex justify-between text-white hidden'>
                    <Link href='/'>
                        <Image src="/images/logo.png" height={200} width={200} className="w-36 h-auto p-0" alt="Aarooshi" />
                    </Link>
                    <p className='text-xl font-bold uppercase'>{title.name}</p>
                    <div className='flex justify-evenly w-40 mt-2'>
                        <FaInstagramSquare />
                        <BsTwitterX />
                        <FaLinkedin />
                    </div>
                </div>
                <div className='md:hidden flex justify-between text-white p-1'>
                    <Link href='/'><Image src="/images/logo.png" height={200} width={200} className="sm:w-32 w-20 p-0" alt='Aarooshi' /></Link>
                    <GiHamburgerMenu className='text-2xl' onClick={toggleDrawer(true)} />
                </div>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <DrawerList />
                </Drawer>
            </div>
        </>
    )
}

const Buttoncd = (props: any) => {
    return (
        <>
            <Button href={props.href} as={Link} size="sm" variant="shadow" className={`mt-3 w-full text-white rounded-md text-left justify-start ${props.cls}`} startContent={props.stc}>
                {props.title}
            </Button>
        </>
    )
}

const DrawerList = () => {
    const lr = `bg-gradient-to-r from-[#000000] to-[#5D105E]`;
    const rl = `bg-gradient-to-r from-[#5D105E] to-[#000000]`
    return (
        <>
            <div className='bg-[#712C82] min-h-full text-white py-3 px-2'>
                <div className='text-center font-bold'>Pick your choice</div>
                <div className='flex flex-col'>
                    <Buttoncd title="E-Commerce Website" stc={<GiShoppingCart />} href="/e-commerce-website" cls={lr} />
                    <Buttoncd title="LMS/ CRM Portal" stc={<CgWebsite />} href="/lms-crm-portal" cls={rl} />
                    <Buttoncd title="Informative website" stc={<BsInfoSquareFill />} href="/informative-website" cls={lr} />
                    <Buttoncd title="Blog/ E-magazine" stc={<FaBlog />} href="/blog-e-magazine" cls={lr} />
                    <Buttoncd title="Any Other Website" stc={<MdOutlineWeb />} href="/other-websites" cls={rl} />
                    <Buttoncd title="Mobile Application" stc={<MdOutlineAppShortcut />} href="/mobile-application" cls={lr} />
                    {/* <Buttoncd title="About Aarooshi" stc={<RiFileInfoFill />} href="/about-us" />
                <Buttoncd title="Get In Touch" stc={<GiLetterBomb />} href="/get-in-touch" />
                <Buttoncd title="Aarooshi Blog" stc={<IoReader />} href="/blog" /> */}
                </div>
                <div className='belowlist-mob flex flex-col space-y-4'>
                    <Link href='/about-us' className='flex items-center link'>
                        <RiFileInfoFill className='mr-2' /> About Us
                    </Link>
                    <Link href='/get-in-touch' className='flex items-center link'>
                        <GiLetterBomb className='mr-2' /> Get In Touch
                    </Link>
                    <Link href='/blog' className='flex items-center link'>
                        <IoReader className='mr-2' /> Aarooshi Blog
                    </Link>
                </div>
                {line}
            </div>
        </>
    )
}

const line = (
    <>
        <div className='relative flex flex-row justify-evenly h-[calc(100vh-476px)] px-2'>
            <div className='w-2 h-full bg-[#5D105E]'></div>
            <div className='w-2 h-full bg-[#5D105E]'></div>
            <div className='w-2 h-full bg-[#5D105E]'></div>
            <div className='w-2 h-full bg-[#5D105E]'></div>
        </div>
    </>
)