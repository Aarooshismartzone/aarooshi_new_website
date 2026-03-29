import Link from 'next/link'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function ExtLinks() {
    return (
        <>
            <Link href={'https://instagram.com/aarooshismartzone'} target='_blank' className='text-inherit decoration-inherit'><FaInstagramSquare /></Link>
            <Link href={'mailto:contact@aarooshi.com'} target='_blank' className='text-inherit decoration-inherit'><MdEmail /></Link>
            <Link href={'https://www.linkedin.com/company/79976624'} target='_blank' className='text-inherit decoration-inherit'><FaLinkedin /></Link>
        </>
    )
}
