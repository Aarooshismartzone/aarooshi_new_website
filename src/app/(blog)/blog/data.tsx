import axios from 'axios';

export type CategoryType = {
    _id: string;
    slug: string;
    name: string;
};

export type PostType = {
    _id: string;
    cat_id: string;
    cat_name: string;
    title: string;
    slug: string;
    content: Text;
    image: string;
    tags: string;
    keywords: string;
    description: string;
    readable_mins: string;
    date: string;
}

// export const fetchCategoryData = async () => {
//     try {
//         const response = await axios.get('https://aarooshibackend.onrender.com/api/categories');
//         return response.data;
//     } catch (error:any) {
//         throw new Error('Error fetching category data: ' + error.message);
//     }
// };

// export const fetchPostData = async () => {
//     try {
//         const response = await axios.get('https://aarooshibackend.onrender.com/api/posts');
//         return response.data;
//     } catch (error:any) {
//         throw new Error('Error fetching post data: ' + error.message);
//     }
// };
