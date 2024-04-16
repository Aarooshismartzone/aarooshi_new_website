import React from "react";
import getStaticProps from "./data";
import Image from 'next/image';
import { CategoryType } from "./data";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

interface TestThisProps {
    categoryData: CategoryType[];
}

const BlogTopNav: React.FC<TestThisProps> = ({ categoryData }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} className=' bg-gray-900' maxWidth='full'>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden mt-0"
                    />
                    <NavbarBrand>
                        <Link href='/'><Image src="images/logo.png" className='w-52' alt='Aarooshi' /></Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {categoryData.map((item, index) => {
                        return (
                            <>
                                <NavbarItem key={index}>
                                    <Link className='text-white' color="foreground" href="#">
                                        {item.name}
                                    </Link>
                                </NavbarItem>
                            </>
                        )
                    })}
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
                                color="primary"
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

export { getStaticProps };
export default BlogTopNav