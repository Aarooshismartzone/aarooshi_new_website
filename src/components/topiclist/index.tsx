import { Button, Link } from '@nextui-org/react'
import './style.scss'
import React from 'react'
import { BsInfoSquareFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";
import { GiLetterBomb, GiShoppingCart } from "react-icons/gi";
import { IoReader } from "react-icons/io5";
import { MdOutlineAppShortcut, MdOutlineWeb } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";

export default function Topiclist() {
    return (
        <>
            <div className='topiclist'>
                <div className='text-center text-xl font-bold text-white'>PICK YOUR CHOICE</div>
                <Buttoncard title="E-Commerce Website" stc={<GiShoppingCart />} href="/e-commerce-website" />
                <Buttoncard title="LMS/ CRM Portal" stc={<CgWebsite />} href="/lms-crm-portal" />
                <Buttoncard title="Informative website" stc={<BsInfoSquareFill />} href="/informative-website" />
                <div className='mt-4'>
                    <Buttoncard title="Blog/ E-magazine" stc={<FaBlog />} href="/blog-e-magazine" />
                    <Buttoncard title="Any Other Website" stc={<MdOutlineWeb />} href="/other-websites" />
                    <Buttoncard title="Mobile Application" stc={<MdOutlineAppShortcut />} href="/mobile-application" />
                </div>
                <div className='mt-4'>
                    <Buttoncard title="About Aarooshi" stc={<RiFileInfoFill />} href="/about-us" />
                    <Buttoncard title="Get In Touch" stc={<GiLetterBomb />} href="/get-in-touch" />
                    <Buttoncard title="Aarooshi Blog" stc={<IoReader />} href="/blog" />
                </div>
            </div>
        </>
    )
}

const Buttoncard = (props: any) => {
    return (
        <>
            <Button href={props.href} as={Link} color="secondary" variant="shadow" className='mt-3 w-full shadow-md shadow-purple-500' startContent={props.stc}>
                {props.title}
            </Button>
        </>
    )
}
