'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles/style.module.scss'
import BlogTopNav from '@/components/blog/blogtopnav'


export default function page() {
    

    return (
        <>
            <div className='bg-gray-800 text-white h-lvh'>
            <BlogTopNav />
                <Anim />
                <h2 className='text-xl mt-4 text-center'>Fresh posts coming soon. Sit tight!</h2>
            </div>
        </>
    )
}



const Anim: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.text} data-text="AAROOSHI BLOG">AAROOSHI BLOG</h1>
            </div>
        </>
    )
}
