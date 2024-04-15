'use client'
import React from 'react';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { CategoryType } from '../data';

interface Props {
    categories: CategoryType[];
}

const BlogTopNav: React.FC<Props> = ({ categories }) => {
    return (
        <>
            <Navbar className='bg-gray-900' maxWidth='full'>
                <NavbarContent>
                    <NavbarMenuToggle aria-label="Toggle menu" className="sm:hidden mt-0" />
                    <NavbarBrand>
                        <Link href='/'><Image src="images/logo.png" className='w-52' alt='Aarooshi' /></Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {categories.map((item) => (
                        <NavbarItem key={item.id}>
                            <Link className='text-white' color="foreground" href="#">
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarContent justify="end">
                    <div className='flex justify-evenly w-40 mt-2'>
                        <FaInstagramSquare />
                        <BsTwitterX />
                        <FaLinkedin />
                    </div>
                </NavbarContent>

                <NavbarMenu>
                    {categories.map((item) => (
                        <NavbarMenuItem key={item.id}>
                            <Link color="foreground" className="w-full" href="#" size="lg">
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    );
}

export default BlogTopNav;
