
export type CategoryType = {
    id: number;
    slug: string;
    name: string
}

export type PostType = {
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

export const fetchCategoryData = async () => {
    const response = await fetch('https://busytiger.com/api/getblogcategories');
    const jsonData = await response.json();
    return jsonData;
};

export const fetchPostData = async () => {
    const response = await fetch('https://busytiger.com/api/getblogposts');
    const jsonData = await response.json();
    return jsonData;
};

