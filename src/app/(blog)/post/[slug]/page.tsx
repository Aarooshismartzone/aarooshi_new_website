'use client'
import { useEffect } from 'react';
import BlogTopNav from '@/components/blog/blogtopnav';
import { PostData, PostType } from '@/components/blog/data';
import { Image } from "@nextui-org/react";
import Link from 'next/link';

export default function Page({ params }: { params: { slug: string } }) {
    
    const post = PostData.filter(u => u.slug === params.slug)

    useEffect(() => {
        if (post.length > 0) {
            document.title = post[0].title; // Dynamically update the title
        }
    }, [post]);

    return (
        <>
            {post.map((p:PostType) => {
                return (
                    <>
                        <meta name='description' content={p.description} />
                        <meta name='keywords' content={p.keywords} />
                        <div className='bg-gray-800 text-white'>
                            <BlogTopNav />
                            <div className='lg:mx-40 md:mx-20 mx-5 lg:py-24 md:py-16 py-8'>
                                <Image src={'/images/blog/' + p.image} alt='Aarooshi Blog' className='float-left mr-3 mb-2 md:w-80 w-full' />
                                <h1 className='md:text-4xl text-3xl tracking-wider uppercase font-bold text-purple-200'>{p.title}</h1>
                                <p className='font-bold italic mt-2'>{p.date}</p>
                                <div className='mt-3 text-justify'>
                                    <div dangerouslySetInnerHTML={{ __html: p.content }} />
                                </div>
                                <p className='mt-4 italic'><b>Tags: </b>{p.tags}</p>
                                <div className='flex md:flex-row flex-col justify-between mt-5 text-blue-300 font-bold'>
                                    <Link href='/blog'>Back to blog list</Link>
                                    <Link href='/' className='md:mt-0 mt-3'>Check main site</Link>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
