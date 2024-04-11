import { useEffect, useState } from "react";

type CategoryType = {
    id: number;
    slug: string;
    name: boolean;
};

export const CategoryData = () => {
    const [data, setData] = useState<CategoryType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://internal.aarooshi.com/api/getblogcategories');
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