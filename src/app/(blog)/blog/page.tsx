'use client'
import React, { useEffect, useState } from 'react'
import styles from './styles/style.module.scss'
import BlogTopNav from '@/components/blog/blogtopnav'
import { PostData } from '@/components/blog/data'
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";


export default function page() {

    const posts = PostData()

    return (
        <>
            <div className='bg-gray-800 text-white min-h-lvh'>
                <BlogTopNav />
                <Anim />
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                {posts.map((p) => {
                    return (
                        <>
                            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                                <CardHeader className="absolute z-10 top-1 flex-col items-start">

                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Relaxing app background"
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
