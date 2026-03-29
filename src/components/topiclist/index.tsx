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
    const lr = `bg-gradient-to-r from-[#000000] to-[#5D105E]`;
    const rl = `bg-gradient-to-r from-[#5D105E] to-[#000000]`
    return (
        <>
            <div className='ms-5 my-5'>
                <div className='topiclist'>
                    <div className='text-center text-xl font-bold text-white'>PICK YOUR CHOICE</div>
                    <Buttoncard title="E-Commerce Website" stc={<GiShoppingCart className="mr-2" />} href="/e-commerce-website" cls={lr} />
                    <Buttoncard title="LMS/ CRM Portal" stc={<CgWebsite className="mr-2" />} href="/lms-crm-portal" cls={rl} />
                    <Buttoncard title="Informative website" stc={<BsInfoSquareFill className="mr-2" />} href="/informative-website" cls={lr} />
                    <div className='mt-4'>
                        <Buttoncard title="Blog/ E-magazine" stc={<FaBlog className="mr-2" />} href="/blog-e-magazine" cls={lr} />
                        <Buttoncard title="Any Other Website" stc={<MdOutlineWeb className="mr-2" />} href="/other-websites" cls={rl} />
                        <Buttoncard title="Mobile Application" stc={<MdOutlineAppShortcut className="mr-2" />} href="/mobile-application" cls={lr} />
                    </div>
                </div>
                <div className='belowlist flex flex-col space-y-4'>
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
            </div>
        </>
    )
}

const Buttoncard = (props: any) => {
    return (
        <>
            <Button href={props.href} as={Link} className={`mt-3 w-full text-white rounded-md text-left justify-start ${props.cls}`} startContent={props.stc}>
                {props.title}
            </Button>
        </>
    )
}
