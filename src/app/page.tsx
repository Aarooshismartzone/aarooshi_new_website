"use client"
import React, { useState } from 'react'
import { BsInfoSquareFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaBlog } from "react-icons/fa";
import { GiLetterBomb, GiShoppingCart } from "react-icons/gi";
import { IoReader } from "react-icons/io5";
import { MdOutlineAppShortcut, MdOutlineWeb } from "react-icons/md";
import { RiFileInfoFill } from "react-icons/ri";

export default function Home() {

  const [value, newValue] = useState({
    //put all the classes of the elements where classes will change. Include even those classes that won't change
    cls1: 'h-4 w-4 bg-gray-600',
    cls2: 'h-4 w-4 bg-gray-600',
    cls3: 'h-4 w-4 bg-gray-600',
    cls4: 'h-4 w-4 bg-gray-600',
    cls5: 'h-4 w-4 bg-gray-600',
    cls6: 'h-4 w-4 bg-gray-600',
    cls7: 'h-4 w-4 bg-gray-600',
    cls8: 'h-4 w-4 bg-gray-600',
    cls9: 'h-4 w-4 bg-gray-600',
    ocs: 'flex gap-4 justify-between p-2',
    box: 'relative bg-black opacity-60 h-24 w-24 align-center rounded-lg shadow-lg shadow-cyan-500/50',
    linkCl: 'hidden'
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

  function expand() {
    newValue(a => {
      return {
        //put the new classes here. Also include those classes that won't change - as the entire class property will get replaced.
        ...a,
        cls1: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss1',
        cls2: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss2',
        cls3: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss3',
        cls4: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss4',
        cls5: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss5',
        cls6: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss6',
        cls7: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss7',
        cls8: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss8',
        cls9: 'md:h-24 md:w-24 w-16 h-16 md:bg-gray-300 hover:bg-gray-100 bg-transparent duration-400 p-1 clss9',
        ocs: 'flex md:gap-4 gap-2 md:p-3 px-1 py-3 md:justify-between justify-evenly',
        box: 'relative flex flex-col justify-between align-middle bg-black py-2 opacity-60 w-72 md:w-96 md:w-96 rounded-lg shadow-lg shadow-cyan-500/50 duration-200',
        linkCl: 'block w-full h-full linkcl duration-500 md:text-sm txs text-white md:text-gray-900 text-center font-bold'
      }
    })
  }

  return (
    <>
        <div className="bg-gradient-to-r from-violet-900 to-fuchsia-900 w-full h-full">
          <div className="absolute left-4 top-4">
            <img src="images/logo.png" className="w-52" />
            <div className="sm:block hidden">
              <h1 className="text-3xl text-white mt-2 mx-5">Take your business online. We are there for you.</h1>
              <p className="text-white font-bold mt-2 mx-5">Explore our services. Click the box below.</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-screen">
            <div className={box} onClick={expand}>
              <div className={ocs}>
                <div className={cls1}><a href='/' className={linkCl}><GiShoppingCart className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />E-commerce website</a></div>
                <div className={cls2}><a href='/' className={linkCl}><CgWebsite className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />LMS/CRM portal</a></div>
                <div className={cls3}><a href='/' className={linkCl}><BsInfoSquareFill className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />Informative website</a></div>
              </div>
              <div className={ocs}>
                <div className={cls4}><a href='/' className={linkCl}><FaBlog className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />Blog/ E-magazine</a></div>
                <div className={cls5}><a href='/' className={linkCl}><MdOutlineWeb className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />Any Other Website</a></div>
                <div className={cls6}><a href='/' className={linkCl}><MdOutlineAppShortcut className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />Mobile Application</a></div>
              </div>
              <div className={ocs}>
                <div className={cls7}><a href='/' className={linkCl}><RiFileInfoFill className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />About Aarooshi</a></div>
                <div className={cls8}><a href='/' className={linkCl}><GiLetterBomb className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />Get In Touch</a></div>
                <div className={cls9}><a href='/' className={linkCl}><IoReader className="md:my-2 my-1 md:mx-7 mx-4 md:text-3xl text-xl text-white md:text-fuchsia-800" />Aarooshi Blog</a></div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
