'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles/style.module.scss'
import BlogTopNav from '@/components/blog/blogtopnav'
import { PostData } from '@/components/blog/data'
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from 'next/link'


export default function page() {

    const posts = PostData()

    return (
        <>
            <div className='bg-gray-800 text-white min-h-lvh'>
                <BlogTopNav />
                <Anim />
                <div className='grid grid-col lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                    {posts.map((p) => {
                        return (
                            <>
                                <div className='col-span-1'>
                                    <Link href={'/post/' + p.slug}>
                                        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                                            <Image
                                                removeWrapper
                                                isZoomed
                                                alt="Aarooshi"
                                                className="z-0 w-full h-full object-cover"
                                                src={"/images/blog/" + p.image}
                                            />
                                            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">

                                                <div className="flex flex-col">
                                                    <p className="text-tiny text-white/60 uppercase font-bold">{p.readable_mins}-MINUTE READ</p>
                                                    <h4 className="text-white/90 font-medium text-xl">{p.title}</h4>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Link>
                                </div>
                            </>
                        )
                    })}
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
