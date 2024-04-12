import React, { useState } from 'react'
import { GiMoonClaws } from "react-icons/gi";
import './style.scss'
import { Button, Link, Switch } from '@nextui-org/react';
import Image from 'next/image';
import { FaHamburger, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
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
                    <Image src="images/logo.png" className="w-36 p-0" alt="Aarooshi" />
                    <p className='text-xl font-bold uppercase'>{title.name}</p>
                    <div className='flex justify-evenly w-40 mt-2'>
                        <FaInstagramSquare />
                        <BsTwitterX />
                        <FaLinkedin />
                    </div>
                </div>
                <div className='md:hidden flex justify-between text-white'>
                    <Image src="images/logo.png" className="sm:w-28 w-20 p-0" alt='Aarooshi' />
                    <FaHamburger onClick={toggleDrawer(true)} />
                </div>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </>
    )
}

const Buttoncd = (props: any) => {
    return (
        <>
            <Button href={props.href} as={Link} color="secondary" size="sm" variant="shadow" className='mt-3 shadow-md shadow-purple-500' startContent={props.stc}>
                {props.title}
            </Button>
        </>
    )
}

const DrawerList = (
    <>
        <div className='bg-gray-800 min-h-full text-white py-3 px-2'>
            <div className='text-center font-bold'>Pick your choice</div>
            <div className='flex flex-col'>
                <Buttoncd title="E-Commerce Website" stc={<GiShoppingCart />} href="/e-commerce-website" />
                <Buttoncd title="LMS/ CRM Portal" stc={<CgWebsite />} href="/lms-crm-portal" />
                <Buttoncd title="Informative website" stc={<BsInfoSquareFill />} href="/informative-website" />
                <Buttoncd title="Blog/ E-magazine" stc={<FaBlog />} href="/blog-e-magazine" />
                <Buttoncd title="Any Other Website" stc={<MdOutlineWeb />} href="/other-websites" />
                <Buttoncd title="Mobile Application" stc={<MdOutlineAppShortcut />} href="/mobile-application" />
                <Buttoncd title="About Aarooshi" stc={<RiFileInfoFill />} href="/about-us" />
                <Buttoncd title="Get In Touch" stc={<GiLetterBomb />} href="/get-in-touch" />
                <Buttoncd title="Aarooshi Blog" stc={<IoReader />} href="/blog" />
            </div>
        </div>
    </>
)