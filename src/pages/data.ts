export interface CategoryType {
    id: number;
    slug: string;
    name: string;
}

export interface PostType {
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

export const getStaticProps = async () => {
    const getcat = await fetch('https://busytiger.com/api/getblogcategories')
    const getpost = await fetch('https://busytiger.com/api/getblogposts')

    const categoryData = await getcat.json()
    const postData = await getpost.json();

    return {
        props: {
            categoryData,
            postData
        }
    }
}

export default getStaticProps;