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
    try {
        const getcat = await fetch('https://busytiger.com/api/getblogcategories');
        const getpost = await fetch('https://busytiger.com/api/getblogposts');

        const categoryData = await getcat.json();
        const postData = await getpost.json();

        return {
            props: {
                categoryData,
                postData
            }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                categoryData: [],
                postData: []
            }
        };
    }
};
