'use client'
import BlogTopNav from '@/components/blog/blogtopnav'
import { PostData } from '@/components/blog/data'
import { Image } from "@nextui-org/react";
import styles from './styles/style.module.scss'
import React from 'react'

export default function Page({ params }: { params: { slug: string } }) {

    const posts = PostData()
    const post = posts.filter(u => u.slug === params.slug)

    return (
        <>
            {post.map((p) => {
                return (
                    <>
                        <title>Aarooshi - {p.title}</title>
                        <meta name='description' content={p.description} />
                        <meta name='keywords' content={p.keywords} />
                        <div className='bg-gray-800 text-white min-h-lvh'>
                            <BlogTopNav />
                            <div className='lg:mx-40 md:mx-20 mx-10 lg:my-24 md:my-16 my-8'>

                                <Image src={'images/blog/' + p.image} className='float-left mr-2 mb-2 md:w-56 w-full' />
                                <h1 className='md:text-4xl text:3xl'>{p.title}</h1>
                                <p className='font-bold'>{p.date}</p>
                                <div className='mt-3 text-justify'>
                                    <div dangerouslySetInnerHTML={{ __html: p.content }} />
                                </div>
                                <p className='mt-4 italic'><b>Tags: </b>{p.tags}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
