import React from 'react'
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from 'next/link';

export default function Blogcard(post:any) {
    return (
        <Link href={'/post/' + post.slug}>
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
                <Image
                    removeWrapper
                    isZoomed
                    alt="Aarooshi"
                    className="z-0 w-full h-full object-cover"
                    src={"/images/blog/" + post.image}
                />
                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">

                    <div className="flex flex-col">
                        <p className="text-tiny text-white/60 uppercase font-bold">{post.readable_mins}-MINUTE READ</p>
                        <h4 className="text-white/90 font-medium text-xl">{post.title}</h4>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}
