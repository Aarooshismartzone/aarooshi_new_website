'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { CategoryData } from '../data';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { CategoryType, fetchCategoryData } from '@/app/(blog)/blog/data';



export default function BlogTopNav() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const [categoryData, setCategoryData] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetchCategoryData().then(res => {
            setCategoryData(res);
        })
    }, [])

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} className=' bg-gray-900' maxWidth='full'>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden mt-0"
                    />
                    <NavbarBrand>
                    <Link href='/'><Image src="/images/logo.png" width={100} height={100} className='w-52 h-auto' alt='Aarooshi' /></Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {categoryData.map((item, index) => {
                        return (
                            <NavbarItem key={index}>
                                <Link className='text-white' color="foreground" href="#">
                                    {item.name}
                                </Link>
                            </NavbarItem>
                        )
                    }
                    )}

                </NavbarContent>
                <NavbarContent justify="end">
                <div className='flex justify-evenly w-40 mt-2'>
                        <FaInstagramSquare />
                        <BsTwitterX />
                        <FaLinkedin />
                    </div>
                </NavbarContent>
                <NavbarMenu>
                    {categoryData.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === categoryData.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}
