'use client'
import { useEffect, useState } from "react";

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
    content: string;
    image: string;
    tags: string;
    keywords: string;
    description: string;
    readable_mins: number;
    date: string
}

// export const CategoryData = () => {
//     const [data, setData] = useState<CategoryType[]>([]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('https://busytiger.com/api/getblogcategories');
//             const jsonData = await response.json();
//             setData(jsonData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [])

//     return data
// }

// export const PostData = () => {
//     const [data, setData] = useState<PostType[]>([]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch('https://busytiger.com/api/getblogposts');
//             const jsonData = await response.json();
//             setData(jsonData);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, [])

//     return data
// }

export const CategoryData = [
    { "_id": "666c6f690d55a94753372186", "name": "For Bloggers", "slug": "for-bloggers" },
    { "_id": "666c6fef0d55a94753372187", "name": "Voices", "slug": "voices" },
    { "_id": "666c702b0d55a94753372189", "name": "For Coders", "slug": "for-coders" },
    { "_id": "666c70550d55a9475337218a", "name": "Tech News", "slug": "tech-news" },
    { "_id": "666c707d0d55a9475337218b", "name": "Tech News", "slug": "tech-news" }
]

export const PostData = [
    {
        "_id": "666c70f30d55a9475337218d",
        "cat_id": "666c6f690d55a94753372186",
        "cat_name": "For Bloggers",
        "title": "How can your blog be an awesome money-making tool??",
        "slug": "How-can-your-blog-be-an-awesome-money-making-tool",
        "content": "<p>Online earning opportunities have gained more versatility with the popularization of several platforms where people can showcase their talents and make a great amount. Today, on the one hand, YouTube is used by a large number of people to create their channels and showcase their videos, while on the other hand, there are several platforms over the internet where people can receive tasks online and make money sitting at home. Amidst all this, blogs continue to be an important source of earning money over the last two decades. If you do not have sufficient time or resources you can create your own online video, or if you lack sufficient time to look for paid online work, you can still create a blog that will fit your needs. With the help of a blog and Google AdSense, you can easily make good pocket money in the initial stages. If your blog becomes a popular one, you can earn a huge money with it.</p>\n<p class='mt-4'><strong>What is a blog?</strong></p>\n<p class='mt-4'>The word &lsquo;blog&rsquo; is derived from the word &lsquo;weblog&rsquo;. It simply means a website where you can upload dynamic content regularly that would be arranged as logs. This is what separates a blog from any other website. Because the content of a blog is updated from time to time, hence, it gets more and more visits as there is always something new. You can compare a blog with a newspaper or a magazine- where each issue has new articles to offer.</p>\n<p class='mt-4'><strong>How to monetize a blog?</strong></p>\n<p class='mt-4'>Monetizing a blog requires three steps:</p>\n<p>&bull;&nbsp; &nbsp;&nbsp;Creating an attractive layout</p>\n<p>&bull;&nbsp; &nbsp;&nbsp;Creating rich content</p>\n<p>&bull;&nbsp; &nbsp;&nbsp;Adding Google AdSense</p>\n<p class='mt-4'>Let us see these steps in detail.</p>\n<p class='mt-4'><strong>Creating an attractive layout:</strong> The layout is the first thing a visitor sees when they enter your blog. Today, there are several online platforms that allow you to create a blog- most of which are often available for free. Those platforms, however, have their own limitations. Because they are owned by third parties, you can customize the layout only to the limit that they allow. Also, you can customize the written content on the basis of the choices they provide. For example, if you wish to change the font size of the title, you can choose only the font that is available in the dropdown list. Hence, it is always advisable to get your own independent blog. It might be a little costly, but shall benefit in the long run. You can customize the layout EXACTLY the way you want and can add the font that you choose. In this context, Aarooshi would be a really good option to get your blog done. The team of developers would help you with the most accurate template going by the nature of the blog website.</p>\n<p class=\"mt-4\"><strong>Creating rich content:</strong> The content of a blog post includes all the aspects that are present on the page. It covers the title, the body, the image(s), and, most importantly, the meta tags. Let&rsquo;s discuss each of them one by one.</p>\n<p class=\"mt-4\">Title: This is the first thing that a visitor is going to read. In fact, this is the line that can either draw a visitor towards a post or move their attention elsewhere. Hence, it is important for the title to be catchy. In this context, we would suggest you avoid using simple and straightforward lines like &lsquo;A tour to the North East&rsquo; or &lsquo;How to make a (recipe name)&rsquo;. Rather, make it something like &lsquo;Unleashing the beauty of the North East&rsquo; or &lsquo;Get something new for your tastebuds this evening&rsquo;.</p>\n<p class=\"mt-4\">Meta Tags: Meta tags are the tags by which search engines shall recognize your blog. These tags mainly include Meta Description and Meta Keywords. While a meta description is a short description of your blog content, meta keywords are those keywords that would lead potential visitors toward your blog post. Your blog shall gain popularity only when it is available on the first page of search engines. So, meta tags are immensely important. While some of the available blogging platforms do provide space where you can add meta tags, there are many such platforms that do not have this space. Hence, it is advisable that if you choose any online platform, you check it on a priority basis if it allows you to update meta information. If you get your blog website created, you should positively ask your website developer to create dynamic meta tag options. Well, even in this context, if you get your blog done from Aarooshi, we shall not just put the meta tags for you, but shall also guide you on how you shall put those tags or how you shall determine what the accurate tag should be.</p>\n<p class=\"mt-4\">Body: The approval of Google AdSense largely depends on the body of your blog post. Your blog post should be original, with no grammatical errors. Also, they should be in sufficient amounts. If you are new to writing or do not know how to frame sentences properly, it is perfectly okay. There are several people who are available to write content for you at a nominal pay. You may reach out to them. However, I would not recommend you use any AI tool for writing your blog content, as it will cause Google AdSense to disapprove your post. Let your content be original. The good news is, at Aarooshi, we even have experienced writers who would jot down your thoughts and create a write-up for you. You may leave it on us.</p>\n<p class=\"mt-4\">Image: A blog post has two types of images- The first is the display image, also referred to as the post image. This image is visible along with your post title. Hence, please ensure that this image is relevant to your context. If you have clicked the image, it is well and good. However, if you do not have any such available images, you may use copy-right free images from Pixabay or Unsplash. It is recommended to not pick images directly from Google as they may be copyrighted ones. Next comes the image(s) that come along with the content. There, you may put any such image if it is available. However, if you do not have any image at hand, you may leave it. The content would still look good.</p>\n<p class=\"mt-4\"><strong>Adding Google AdSense:</strong> This is the final task once the blog is created. For this, you need to register with AdSense with your Google (Gmail) account. Once it is done, you need to connect your blog with the account. It might be a confusing process for people who are not handy with computers. You may take the help of YouTube videos for this purpose. Well, for Aarooshi clients, this service shall be offered by our team only. Please note that once you connect your website with AdSense, it will take around 10 days to verify. It will look mainly for three things on your blog website- written content, originality, and grammar. So, it is advised to create an account with AdSense <em>once you have got minimum of five blog posts</em>.</p>\n<p>Once AdSense is approved, you can start finding ads in your blog. If any visitor clicks on any of the ads, an amount shall get added to your AdSense account wallet. Once you have a sufficient amount in your AdSense wallet, you can withdraw the amount to your bank account using Wire Transfer. At Aarooshi, we do have packages for such blog websites that would cover all of these- right from scratch. Not just this, we would also guide you thoroughly towards how to operate the blog, how to check your AdSense balance, and how to withdraw money. This is what separates us from most other website developers.</p>\n<p class=\"mt-4\">I hope you found this post helpful. If you still have any questions regarding this aspect feel free to reach out.</p>", "image": "blog-writing.webp", "tags": "Blogging, AdSense", "keywords": "website development blog, best website development, reliable website developer, Google Ads, making money using blog website, make money by writing a blog", "description": "website development blog, best website development, reliable website developer, Google Ads, making money using blog website, make money by writing a blog",
        "readable_mins": 5,
        "date": "September 14, 2023"
    }
]