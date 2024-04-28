'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles/style.module.scss'
import BlogTopNav from '@/components/blog/blogtopnav'
import Blogcard from '@/components/blog/blogcard'
import { PostType, fetchPostData } from './data'

export default function Blogpage() {

    const [data, setData] = useState<PostType[]>([]);

    useEffect(() => {
        fetchPostData().then(res => {
            setData(res);
        })
    }, [])

    return (
        <>
            <div className='bg-gray-800 text-white min-h-lvh'>
                <BlogTopNav />
                <Anim />
                <div className='lg:mx-40 md:mx-20 mx-10'>
                    <h1 className='text-2xl text-center uppercase mt-4 mb-4'>Trending</h1>
                    <div className='grid grid-col lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                        {data.map((p) => {
                            return (
                                <>
                                    <div className='col-span-1'>
                                        <Blogcard slug={p.slug} title={p.title} readable_mins={p.readable_mins} image={p.image} />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
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
