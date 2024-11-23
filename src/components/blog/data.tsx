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
    { "_id": "666c702b0d55a94753372189", "name": "For Coders", "slug": "for-coders" },
    { "_id": "666c70550d55a9475337218a", "name": "For Businesses", "slug": "for-businesses" },
    { "_id": "666c707d0d55a9475337218b", "name": "Tech News", "slug": "tech-news" },
    { "_id": "666c6fef0d55a94753372187", "name": "Voices", "slug": "voices" }
]

export const PostData = [
    {
        "_id": "01",
        "cat_id": "666c6f690d55a94753372186",
        "cat_name": "For Bloggers",
        "title": "How can your blog be an awesome money-making tool??",
        "slug": "How-can-your-blog-be-an-awesome-money-making-tool",
        "content": "<p>Online earning opportunities have gained more versatility with the popularization of several platforms where people can showcase their talents and make a great amount. Today, on the one hand, YouTube is used by a large number of people to create their channels and showcase their videos, while on the other hand, there are several platforms over the internet where people can receive tasks online and make money sitting at home. Amidst all this, blogs continue to be an important source of earning money over the last two decades. If you do not have sufficient time or resources you can create your own online video, or if you lack sufficient time to look for paid online work, you can still create a blog that will fit your needs. With the help of a blog and Google AdSense, you can easily make good pocket money in the initial stages. If your blog becomes a popular one, you can earn a huge money with it.</p>\n<p class='mt-4'><strong>What is a blog?</strong></p>\n<p class='mt-4'>The word &lsquo;blog&rsquo; is derived from the word &lsquo;weblog&rsquo;. It simply means a website where you can upload dynamic content regularly that would be arranged as logs. This is what separates a blog from any other website. Because the content of a blog is updated from time to time, hence, it gets more and more visits as there is always something new. You can compare a blog with a newspaper or a magazine- where each issue has new articles to offer.</p>\n<p class='mt-4'><strong>How to monetize a blog?</strong></p>\n<p class='mt-4'>Monetizing a blog requires three steps:</p>\n<p>&bull;&nbsp; &nbsp;&nbsp;Creating an attractive layout</p>\n<p>&bull;&nbsp; &nbsp;&nbsp;Creating rich content</p>\n<p>&bull;&nbsp; &nbsp;&nbsp;Adding Google AdSense</p>\n<p class='mt-4'>Let us see these steps in detail.</p>\n<p class='mt-4'><strong>Creating an attractive layout:</strong> The layout is the first thing a visitor sees when they enter your blog. Today, there are several online platforms that allow you to create a blog- most of which are often available for free. Those platforms, however, have their own limitations. Because they are owned by third parties, you can customize the layout only to the limit that they allow. Also, you can customize the written content on the basis of the choices they provide. For example, if you wish to change the font size of the title, you can choose only the font that is available in the dropdown list. Hence, it is always advisable to get your own independent blog. It might be a little costly, but shall benefit in the long run. You can customize the layout EXACTLY the way you want and can add the font that you choose. In this context, Aarooshi would be a really good option to get your blog done. The team of developers would help you with the most accurate template going by the nature of the blog website.</p>\n<p class=\"mt-4\"><strong>Creating rich content:</strong> The content of a blog post includes all the aspects that are present on the page. It covers the title, the body, the image(s), and, most importantly, the meta tags. Let&rsquo;s discuss each of them one by one.</p>\n<p class=\"mt-4\">Title: This is the first thing that a visitor is going to read. In fact, this is the line that can either draw a visitor towards a post or move their attention elsewhere. Hence, it is important for the title to be catchy. In this context, we would suggest you avoid using simple and straightforward lines like &lsquo;A tour to the North East&rsquo; or &lsquo;How to make a (recipe name)&rsquo;. Rather, make it something like &lsquo;Unleashing the beauty of the North East&rsquo; or &lsquo;Get something new for your tastebuds this evening&rsquo;.</p>\n<p class=\"mt-4\">Meta Tags: Meta tags are the tags by which search engines shall recognize your blog. These tags mainly include Meta Description and Meta Keywords. While a meta description is a short description of your blog content, meta keywords are those keywords that would lead potential visitors toward your blog post. Your blog shall gain popularity only when it is available on the first page of search engines. So, meta tags are immensely important. While some of the available blogging platforms do provide space where you can add meta tags, there are many such platforms that do not have this space. Hence, it is advisable that if you choose any online platform, you check it on a priority basis if it allows you to update meta information. If you get your blog website created, you should positively ask your website developer to create dynamic meta tag options. Well, even in this context, if you get your blog done from Aarooshi, we shall not just put the meta tags for you, but shall also guide you on how you shall put those tags or how you shall determine what the accurate tag should be.</p>\n<p class=\"mt-4\">Body: The approval of Google AdSense largely depends on the body of your blog post. Your blog post should be original, with no grammatical errors. Also, they should be in sufficient amounts. If you are new to writing or do not know how to frame sentences properly, it is perfectly okay. There are several people who are available to write content for you at a nominal pay. You may reach out to them. However, I would not recommend you use any AI tool for writing your blog content, as it will cause Google AdSense to disapprove your post. Let your content be original. The good news is, at Aarooshi, we even have experienced writers who would jot down your thoughts and create a write-up for you. You may leave it on us.</p>\n<p class=\"mt-4\">Image: A blog post has two types of images- The first is the display image, also referred to as the post image. This image is visible along with your post title. Hence, please ensure that this image is relevant to your context. If you have clicked the image, it is well and good. However, if you do not have any such available images, you may use copy-right free images from Pixabay or Unsplash. It is recommended to not pick images directly from Google as they may be copyrighted ones. Next comes the image(s) that come along with the content. There, you may put any such image if it is available. However, if you do not have any image at hand, you may leave it. The content would still look good.</p>\n<p class=\"mt-4\"><strong>Adding Google AdSense:</strong> This is the final task once the blog is created. For this, you need to register with AdSense with your Google (Gmail) account. Once it is done, you need to connect your blog with the account. It might be a confusing process for people who are not handy with computers. You may take the help of YouTube videos for this purpose. Well, for Aarooshi clients, this service shall be offered by our team only. Please note that once you connect your website with AdSense, it will take around 10 days to verify. It will look mainly for three things on your blog website- written content, originality, and grammar. So, it is advised to create an account with AdSense <em>once you have got minimum of five blog posts</em>.</p>\n<p>Once AdSense is approved, you can start finding ads in your blog. If any visitor clicks on any of the ads, an amount shall get added to your AdSense account wallet. Once you have a sufficient amount in your AdSense wallet, you can withdraw the amount to your bank account using Wire Transfer. At Aarooshi, we do have packages for such blog websites that would cover all of these- right from scratch. Not just this, we would also guide you thoroughly towards how to operate the blog, how to check your AdSense balance, and how to withdraw money. This is what separates us from most other website developers.</p>\n<p class=\"mt-4\">I hope you found this post helpful. If you still have any questions regarding this aspect feel free to reach out.</p>",
        "image": "blog-writing.webp",
        "tags": "Blogging, AdSense",
        "keywords": "website development blog, best website development, reliable website developer, Google Ads, making money using blog website, make money by writing a blog",
        "description": "website development blog, best website development, reliable website developer, Google Ads, making money using blog website, make money by writing a blog",
        "readable_mins": 5,
        "date": "September 14, 2023",
    },
    {
        "_id": "02",
        "cat_id": "666c70550d55a9475337218a",
        "cat_name": "For Businesses",
        "title": "Why Does Your Small Business Need an E-Commerce Website?",
        "slug": "Why-Does-Your-Small-Business-Need-an-E-Commerce-Website",
        "content": "<p style='margin-bottom: 20px;'> In today's digital age, having an online presence is not just a luxury; it's a necessity. If you're a small business owner, you might be wondering whether it's worth investing in an e-commerce website. After all, if your business already has a steady stream of customers or you're active on social media, why bother with an additional online platform? </p> <p style='margin-bottom: 20px;'> The truth is, an e-commerce website offers numerous advantages that can significantly boost your business growth. Whether you're selling physical products, digital goods, or services, having a dedicated e-commerce platform can expand your reach, improve customer experiences, and increase your overall revenue. Let's explore why your small business absolutely needs an e-commerce website. </p> <h2 style='font-weight:bold; margin-bottom: 8px'>1. Reach a Larger Audience</h2> <p style='margin-bottom: 20px;'> With an e-commerce website, you're no longer limited by your geographic location. Your potential customer base grows exponentially as your products or services become accessible to anyone with an internet connection. Whether they’re local customers looking for convenience or international shoppers seeking your niche products, your business is open 24/7, regardless of time zones or holidays. </p> <h2 style='font-weight:bold; margin-bottom: 8px'>2. Increase Sales and Revenue</h2> <p style='margin-bottom: 20px;'> The more accessible your products are, the more likely people are to purchase from you. With an e-commerce site, you're removing barriers that might exist in a traditional brick-and-mortar setting, such as limited hours or location-based restrictions. Online shopping is convenient, and customers are more inclined to purchase if they can do so from the comfort of their homes. This convenience often leads to higher sales and revenue streams. </p> <p style='margin-bottom: 20px;'> Moreover, by implementing targeted marketing strategies like email promotions, product recommendations, and upselling, you can encourage repeat purchases, leading to an increase in your average order value. </p> <h2 style='font-weight:bold; margin-bottom: 8px'>3. Improve Customer Experience</h2> <p style='margin-bottom: 20px;'> Customers expect seamless shopping experiences, and an e-commerce website allows you to deliver just that. By offering detailed product descriptions, high-quality images, user reviews, and easy checkout processes, you can provide a richer and more informative shopping experience. The ability to compare products, check availability, and access customer support online ensures that your business is customer-friendly. </p> <p style='margin-bottom: 20px;'> Furthermore, e-commerce sites allow for personalized shopping experiences. You can use data such as browsing history or purchase behavior to recommend products that fit your customers' preferences, improving their overall experience and increasing the likelihood of a purchase. </p> <h2 style='font-weight:bold; margin-bottom: 8px'>4. Build Brand Awareness</h2> <p style='margin-bottom: 20px;'> In the modern world, consumers often turn to search engines when looking for products or services. If your business doesn’t appear in search results, you’re missing out on a huge opportunity to attract potential customers. A well-optimized e-commerce website improves your business’s online visibility and enhances brand recognition. </p> <p style='margin-bottom: 20px;'> Your e-commerce website also serves as a marketing tool. Through search engine optimization (SEO), you can drive organic traffic to your site by targeting specific keywords related to your products or services. Additionally, paid advertising campaigns like Google Ads or social media promotions can further increase your online exposure. </p> <h2 style='font-weight:bold; margin-bottom: 8px'>5. Compete with Larger Businesses</h2> <p style='margin-bottom: 20px;'> Small businesses often feel overshadowed by larger corporations with bigger marketing budgets and established customer bases. However, with an e-commerce website, you can level the playing field. You don’t need a massive physical store or a large team to make an impact online. A professionally designed website and smart digital marketing strategies allow you to compete with larger competitors by showcasing your unique value proposition. </p> <p style='margin-bottom: 20px;'> Customers are drawn to personalized services and quality products, and an e-commerce platform enables you to offer that—often with more agility and direct customer interaction than larger businesses can manage. </p> <h2 style='font-weight:bold; margin-bottom: 8px'>6. Gain Valuable Insights Through Analytics</h2> <p style='margin-bottom: 20px;'> One of the most significant advantages of having an e-commerce website is access to data analytics. You can track customer behavior, monitor sales trends, and gather insights into which products are performing well. This data allows you to make informed decisions, optimize your marketing strategies, and continuously improve the user experience. </p> <p style='margin-bottom: 20px;'> These insights are invaluable for small businesses, helping you to adjust your product offerings, refine your pricing strategies, and better understand your target audience. </p> <h2 style='font-weight:bold; margin-bottom: 8px'>7. Stay Competitive in the Digital World</h2> <p style='margin-bottom: 20px;'> In the competitive landscape of today’s business world, simply having a social media page or physical store is not enough. Consumers expect businesses to have an online presence, and those that don’t are likely to fall behind. An e-commerce website ensures that your business remains relevant and competitive in the digital marketplace. </p> <p style='margin-bottom: 20px;'> By embracing e-commerce, you're future-proofing your business. Online sales are expected to continue growing, and businesses that invest in digital platforms now will be better positioned to thrive in the coming years. </p> <h2 style='font-weight:bold; margin-bottom: 8px'>Conclusion</h2> <p style='margin-bottom: 20px;'> Building an e-commerce website for your small business is not just about keeping up with trends; it’s about meeting the expectations of today’s consumers and staying competitive in a rapidly evolving market. From expanding your reach to enhancing the customer experience, an online store offers multiple benefits that will help your business grow. </p> <p style='margin-bottom: 20px;'> If you haven’t already, now is the time to consider taking your business online. An e-commerce website is an investment that can lead to long-term success, increased revenue, and stronger customer loyalty. </p>",
        "image": "ecomm.jpg",
        "tags": "E-commerce, Website",
        "keywords": "small business, e-commerce website, online store, small business growth, online sales, business website, customer experience, brand awareness, revenue growth, digital marketing, compete online, SEO, analytics, online presence, marketing strategy",
        "description": "Discover why your small business needs an e-commerce website and how it can help you reach new customers, increase sales, and stay competitive.",
        "readable_mins": 5,
        "date": "September 23, 2024",
    },
    {
        "_id": "03",
        "cat_id": "666c70550d55a9475337218a",
        "cat_name": "For Businesses",
        "title": "How Can a Website Help You Get More Clients for the Services You Offer?",
        "slug": "How-Can-a-Website-Help-You-Get-More-Clients-for-the-Services-You-Offer",
        "content": `<p>
            In today's digital age, a website is no longer just a luxury; it is a necessity for businesses that want to stay competitive and grow. 
            Whether you're a freelancer, a small business owner, or run a large enterprise, having an online presence is one of the most effective ways to attract and retain clients.
        </p>
        <p>
            Here are some ways a website can help you get more clients for the services you offer:
        </p>

        <h2 style="font-weight: bold;">1. Increased Visibility</h2>
        <p>
            A well-designed website serves as a digital storefront for your business, accessible 24/7. Potential clients can find you through search engines, social media, or even word-of-mouth referrals. 
            By optimizing your website with the right keywords, you can improve your ranking on search engines and ensure that people searching for services you offer can easily find you.
        </p>

        <h2 style="font-weight:bold;">2. Highlighting Your Services</h2>
        <p>
            Your website is the perfect platform to showcase what you do. Use it to:
        </p>
        <ul>
            <li>List the services you provide with detailed descriptions.</li>
            <li>Showcase testimonials from satisfied clients.</li>
            <li>Upload case studies or a portfolio to build credibility.</li>
            <li>Use images and videos to demonstrate the value of your services.</li>
        </ul>

        <h2 style="font-weight:bold;">3. Simplified Online Booking</h2>
        <p>
            One of the biggest advantages of having a website is enabling online booking. Clients value convenience, and a booking system lets them schedule appointments or services with a few clicks. 
            By integrating an easy-to-use booking tool, you can:
        </p>
        <ul>
            <li>Save time for both you and your clients.</li>
            <li>Reduce the back-and-forth communication for scheduling.</li>
            <li>Allow clients to book outside of your business hours.</li>
            <li>Minimize no-shows with automated reminders and confirmations.</li>
        </ul>
        <p>
            This streamlined experience can increase client satisfaction and make them more likely to recommend your services to others.
        </p>

        <h2 style="font-weight:bold;">4. Better Record Maintenance</h2>
        <p>
            A website can also double as a hub for maintaining client records and data. By integrating a customer relationship management (CRM) system or similar tools, you can:
        </p>
        <ul>
            <li>Keep track of client interactions and service history.</li>
            <li>Store important documents securely.</li>
            <li>Generate reports for business insights and performance tracking.</li>
        </ul>
        <p>
            This not only helps you stay organized but also allows you to personalize your services for repeat clients, increasing their loyalty.
        </p>

        <h2 style="font-weight:bold;">5. Building Trust and Credibility</h2>
        <p>
            A professionally designed website makes a strong first impression. Clients are more likely to trust a business with a modern, user-friendly website than one with no online presence. 
            Here are some trust-building elements to include on your website:
        </p>
        <ul>
            <li>Clear contact information with a physical address and phone number.</li>
            <li>A “Frequently Asked Questions” (FAQ) section to address common concerns.</li>
            <li>SSL certification to ensure secure data handling (HTTPS).</li>
            <li>A privacy policy and terms of service to build confidence in your practices.</li>
        </ul>

        <h2 style="font-weight:bold;">6. Cost-Effective Marketing</h2>
        <p>
            Traditional marketing methods, such as print ads or direct mail, can be expensive and often have limited reach. A website, on the other hand, provides a cost-effective platform for:
        </p>
        <ul>
            <li>Promoting your services through blog posts, videos, or downloadable resources.</li>
            <li>Running targeted online ad campaigns.</li>
            <li>Sharing updates and promotions via newsletters or social media links.</li>
        </ul>
        <p>
            The return on investment (ROI) from digital marketing through your website is often much higher compared to traditional methods.
        </p>

        <h2 style="font-weight:bold;">7. Reaching a Wider Audience</h2>
        <p>
            Unlike a physical office, a website is not constrained by location. You can reach clients from across the globe, enabling you to expand your business beyond your immediate geographic area. 
            With features like multi-language support or currency converters, you can cater to a diverse audience and grow your client base exponentially.
        </p>

        <h2 style="font-weight:bold;">8. Staying Competitive</h2>
        <p>
            Chances are, your competitors already have a website. By not having one, you risk losing potential clients who might choose another provider simply because they’re easier to find online. 
            A website ensures you stay in the game and remain a viable choice for clients in your industry.
        </p>

        <h2 style="font-weight:bold;">Conclusion</h2>
        <p>
            A website is more than just an online presence; it is a powerful tool to attract and retain clients. From increasing visibility to simplifying online booking and improving record maintenance, 
            the benefits of having a website are undeniable. By investing in a professional, user-friendly website, you not only enhance your credibility but also open up endless opportunities to grow your business.
        </p>
        <p>
            Don't wait any longer—start building your website today and watch your client base grow!
        </p>`,
        "image": "ecomm.jpg",
        "tags": "E-commerce, Website",
        "keywords": "small business, e-commerce website, online store, small business growth, online sales, business website, customer experience, brand awareness, revenue growth, digital marketing, compete online, SEO, analytics, online presence, marketing strategy",
        "description": "Discover why your small business needs an e-commerce website and how it can help you reach new customers, increase sales, and stay competitive.",
        "readable_mins": 5,
        "date": "September 23, 2024",
    },
]