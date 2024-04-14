'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles/style.module.scss'
import BlogTopNav from '@/components/blog/blogtopnav'
import { PostData } from '@/components/blog/data'


export default function page() {
    
const posts = PostData()

    return (
        <>
            <div className='bg-gray-800 text-white h-lvh'>
            <BlogTopNav />
                <Anim />
                {posts.map((p) => {
                    return (
                        <>
                        {p.title}<br/>
                        {p.content}
                        </>
                    )
                })}
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
