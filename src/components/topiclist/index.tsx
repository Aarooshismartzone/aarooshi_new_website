import { Button } from '@nextui-org/react'
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
                <div className='text-center text-xl font-bold text-white'>LIST OF TOPICS</div>
                <Buttoncard title="E-Commerce Website" stc={<GiShoppingCart />} />
                <Buttoncard title="LMS/ CRM Portal" stc={<CgWebsite />} />
                <Buttoncard title="Informative website" stc={<BsInfoSquareFill />} />
                <div className='mt-4'>
                    <Buttoncard title="Blog/ E-magazine" stc={<FaBlog />} />
                    <Buttoncard title="Any Other Website" stc={<MdOutlineWeb />} />
                    <Buttoncard title="Mobile Application" stc={<MdOutlineAppShortcut />} />
                </div>
                <div className='mt-4'>
                    <Buttoncard title="About Aarooshi" stc={<RiFileInfoFill />} />
                    <Buttoncard title="Get In Touch" stc={<GiLetterBomb />} />
                    <Buttoncard title="Aarooshi Blog" stc={<IoReader />} />
                </div>
            </div>
        </>
    )
}

const Buttoncard = (props: any) => {
    return (
        <>
            <Button color="secondary" variant="shadow" className='mt-3 w-full shadow-md shadow-purple-500' startContent={props.stc}>
                {props.title}
            </Button>
        </>
    )
}
