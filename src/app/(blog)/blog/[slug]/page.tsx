'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import BlogTopNav from '@/components/blog/blogtopnav'
import Blogcard from '@/components/blog/blogcard'
import { CategoryData, PostData, PostType } from '@/components/blog/data'
import styles from '../styles/style.module.scss'
import '../style.scss'

export default function BlogCategoryPage() {
    const params = useParams();
    const categorySlug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug || null; // Ensure string

    // Find the category by slug to get its _id
    const category = CategoryData.find(cat => cat.slug === categorySlug);

    // Filter posts based on category ID
    const filteredPosts = category 
        ? PostData.filter(post => post.cat_id === category._id) 
        : [];

    return (
        <>
            <div className='blogpage'>
                <BlogTopNav />
                <Anim />
                <div className='lg:mx-40 md:mx-20 mx-10'>
                    <h1 className='text-2xl text-center uppercase mt-4 mb-4'>
                        {category ? `Category: ${category.name}` : 'Trending'}
                    </h1>
                    <div className='grid grid-col lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((p: PostType) => (
                                <div className='col-span-1' key={p._id}>
                                    <Blogcard {...p} />
                                </div>
                            ))
                        ) : (
                            <p className='text-center text-gray-500 col-span-full'>
                                No posts found for this category.
                            </p>
                        )}
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