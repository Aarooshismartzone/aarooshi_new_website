'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles/style.module.scss'
import BlogTopNav from '@/components/blog/blogtopnav'
import Blogcard from '@/components/blog/blogcard'
import { PostData, PostType } from '@/components/blog/data'
import './style.scss'




export default function Blogpage() {

    return (
        <>
            <div className='blogpage'>
                <BlogTopNav />
                <Anim />
                <div className='lg:mx-40 md:mx-20 mx-10'>
                    <h1 className='text-2xl text-center uppercase mt-4 mb-4'>Trending</h1>
                    <div className='grid grid-col lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                        {PostData.sort((a, b) => b._id.localeCompare(a._id)).map((p: PostType) => {
                            return (
                                <div className='col-span-1' key={p._id}>
                                    <Blogcard
                                        slug={p.slug}
                                        title={p.title}
                                        readable_mins={p.readable_mins}
                                        image={p.image}
                                        _id={p._id}
                                        cat_id={p.cat_id}
                                        cat_name={p.cat_name}
                                        content={p.content}
                                        tags={p.tags}
                                        keywords={p.keywords}
                                        description={p.description}
                                        date={p.date}
                                    />
                                </div>
                            );
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
