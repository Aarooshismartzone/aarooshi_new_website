'use client'

import { useEffect, useState } from "react";

export type CategoryType = {
    id: number;
    slug: string;
    name: string;
};

type PostType = {
    id: number;
    cat_id: number;
    cat_name: string;
    title: string;
    slug: string;
    content: Text;
    image: string;
    tags: string;
    keywords: string;
    description: string;
    readable_mins: number;
    date: string
}

export const CategoryData = () => {
    const [data, setData] = useState<CategoryType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://busytiger.com/api/getblogcategories');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    return data
}

export const PostData = () => {
    const [data, setData] = useState<PostType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://busytiger.com/api/getblogposts');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    return data
}

export async function getStaticProps() {
    const categoriesResponse = await fetch('https://busytiger.com/api/getblogcategories');
    const categoriesData = await categoriesResponse.json();

    const postsResponse = await fetch('https://busytiger.com/api/getblogposts');
    const postsData = await postsResponse.json();

    return {
        props: {
            categories: categoriesData,
            posts: postsData
        }
    };
}
