import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';

export interface CategoryType {
  _id: string;
  slug: string;
  name: string;
};

export interface MDPostType {
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
  readable_mins: number;
  date: string
}

export const MdbCategories = async () => {
  try {
    const client = await clientPromise;
    const db = client.db('aarooshi'); // database name
    const collection = db.collection('categories'); // collection name
    const data = await collection.find({}).toArray();
    
    const categories: CategoryType[] = data.map((category: any) => ({
      _id: category._id.toString(), // Assuming _id is of type ObjectId and needs to be converted to string
      slug: category.slug,
      name: category.name,     
    }));

    return categories;
  } catch (e) {
    console.error(e);
    throw new Error('Unable to fetch data');
  }
};

export const MdbPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const client = await clientPromise;
      const db = client.db('aarooshi'); // database name
      const collection = db.collection('posts'); // collection name
      const data = await collection.find({}).toArray();
  
      //res.status(200).json(data);
      const posts: MDPostType[] = data.map((post:any) => ({
        _id: post._id.toString(),
        cat_id: post.cat_id,
        cat_name: post.cat_name,
        title: post.title,
        slug: post.slug,
        content: post.content,
        image: post.image,
        tags: post.tags,
        keywords: post.keywords,
        description: post.description,
        readable_mins: post.readable_mins,
        date: post.date,
      }))
    } catch (e) {
      console.error(e);
     // res.status(500).json({ error: 'Unable to fetch data' });
     throw new Error('Unable to fetch data');
    }
  };
