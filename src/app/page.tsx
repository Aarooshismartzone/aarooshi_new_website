"use client"
import { Spinner } from '@nextui-org/react';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react'
import { BsInfoSquareFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";
import { GiLetterBomb, GiShoppingCart } from "react-icons/gi";
import { IoReader } from "react-icons/io5";
import { MdOutlineAppShortcut, MdOutlineWeb } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";

export default function Home() {

  const [loading, setLoading] = useState<boolean>(false)
  const [value, newValue] = useState({
    //put all the classes of the elements where classes will change. Include even those classes that won't change
    cls1: 'h-4 w-4 bg-yellow-300',
    cls2: 'h-4 w-4 bg-green-300',
    cls3: 'h-4 w-4 bg-blue-300',
    cls4: 'h-4 w-4 bg-pink-300',
    cls5: 'h-4 w-4 bg-sky-300',
    cls6: 'h-4 w-4 bg-amber-300',
    cls7: 'h-4 w-4 bg-fuchsia-300',
    cls8: 'h-4 w-4 bg-zinc-300',
    cls9: 'h-4 w-4 bg-lime-300',
    ocs: 'flex gap-4 justify-between p-2',
    box: 'relative bg-black opacity-60 h-24 w-24 align-center rounded-lg shadow-lg shadow-cyan-500/50 md:mt-0 mt-40 animate-lighting',
    linkCl: 'hidden',
    info: 'text-white md:text-sm text-[11px] font-bold mt-2 mx-5 text-center uppercase'
  });

  const cls1 = value.cls1
  const cls2 = value.cls2
  const cls3 = value.cls3
  const cls4 = value.cls4
  const cls5 = value.cls5
  const cls6 = value.cls6
  const cls7 = value.cls7
  const cls8 = value.cls8
  const cls9 = value.cls9
  const ocs = value.ocs
  const box = value.box
  const linkCl = value.linkCl
  const info = value.info

  function expand() {
    newValue(a => {
      return {
        //put the new classes here. Also include those classes that won't change - as the entire class property will get replaced.
        ...a,
        cls1: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss1',
        cls2: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss2',
        cls3: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss3',
        cls4: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss4',
        cls5: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss5',
        cls6: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss6',
        cls7: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss7',
        cls8: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss8',
        cls9: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:lg:bg-gray-100 bg-transparent duration-400 p-1 clss9',
        ocs: 'flex md:gap-4 gap-2 md:p-3 px-1 py-3 md:justify-between justify-evenly',
        box: 'relative flex flex-col justify-between align-middle bg-black py-2 opacity-60 w-72 md:w-96 md:w-96 rounded-lg shadow-lg shadow-cyan-500/50 duration-200 md:mt-0 mt-40',
        linkCl: 'block w-full h-full linkcl duration-500 md:text-sm txs text-white md:text-gray-900 text-center font-bold',
        info: 'text-white md:text-sm text-[11px] font-bold mt-2 mx-1 text-center uppercase'
      }
    })
  }

  const loadit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000)
  }

  return (
    <>
      <div className="w-full h-screen bg-bottom bg-cover" style={{ backgroundImage: `url('/images/real_bg.jpg')` }}>
        <div className="absolute left-4 top-4">
          <Image src="/images/logo.png" className='w-52 h-auto' alt='Aarooshi' height={600} width={600} />
        </div>
        <div className="absolute left-1/2 top-[12%] transform -translate-x-1/2 translate-y-[-12%] text-center">
          <div>
            <h1 className="lg:text-3xl md:text-2xl text-md text-white lg:mt-2 mt-6 uppercase xl:whitespace-nowrap whitespace-normal font-bold">Take your business online. We are there for you.</h1>
            <p className={info}>Explore our services. Click the box below.</p>
          </div>
        </div>
        <div className="flex items-center justify-center h-screen">
          {loading ? (
            <Spinner label="Loading..." color="secondary" labelColor="secondary" />
          ) : (
            <div className={box} onClick={expand}>
              <div className={ocs}>
                <div className={cls1}><a href='/e-commerce-website' className={linkCl} onClick={loadit}><GiShoppingCart className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-yellow-300 md:text-yellow-600" />E-commerce website</a></div>
                <div className={cls2}><a href='/lms-crm-portal' className={linkCl} onClick={loadit}><CgWebsite className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-green-300 md:text-green-600" />LMS/CRM portal</a></div>
                <div className={cls3}><a href='/informative-website' className={linkCl} onClick={loadit}><BsInfoSquareFill className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-blue-300 md:text-blue-600" />Informative website</a></div>
              </div>
              <div className={ocs}>
                <div className={cls4}><a href='/blog-e-magazine' className={linkCl} onClick={loadit}><FaBlog className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-pink-300 md:text-pink-600" />Blog/ E-magazine</a></div>
                <div className={cls5}><a href='/other-websites' className={linkCl} onClick={loadit}><MdOutlineWeb className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-sky-300 md:text-sky-600" />Any Other Website</a></div>
                <div className={cls6}><a href='/mobile-application' className={linkCl} onClick={loadit}><MdOutlineAppShortcut className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-amber-300 md:text-amber-600" />Mobile Application</a></div>
              </div>
              <div className={ocs}>
                <div className={cls7}><a href='/about-us' className={linkCl} onClick={loadit}><RiFileInfoFill className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-fuchsia-300 md:text-fuchsia-600" />About Aarooshi</a></div>
                <div className={cls8}><a href='/get-in-touch' className={linkCl} onClick={loadit}><GiLetterBomb className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-zinc-300 md:text-zinc-600" />Get In Touch</a></div>
                <div className={cls9}><a href='/blog' className={linkCl} onClick={loadit}><IoReader className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-lime-300 md:text-lime-600" />Aarooshi Blog</a></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
