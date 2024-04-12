'use client'
import React from 'react'
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { CategoryData } from '../data';

export default function BlogTopNav() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const cats = CategoryData();

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} className=' bg-gray-900' maxWidth='full'>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden mt-0"
                    />
                    <NavbarBrand>
                    <Image src="images/logo.png" className='w-52' alt='Aarooshi' />
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {cats.map((item, index) => {
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
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {cats.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === cats.length - 1 ? "danger" : "foreground"
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
