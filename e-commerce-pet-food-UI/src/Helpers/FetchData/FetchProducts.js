import { useEffect } from 'react';

const FetchProducts = ({ setProducts, setLoading, limit = 2, offset = 0, setCount, categoryId }) => {
    useEffect(() => {
        console.log("in fetch products method ", offset )
        const fetchData = async () => {
            try {
                const productResponse = await fetch(`http://localhost:4000/api/allProductsWithCategory?categoryId=${categoryId}&limit=${limit}&offset=${offset}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (productResponse.ok) {
                    const productData = await productResponse.json();
                    console.log(productData.body); // Log the response data
                    setCount(productData.body.total);
                    setProducts(productData.body.results);
                    setLoading(false);
                } else {
                    console.error('Error fetching data:', productResponse.status);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [setProducts, setLoading, offset, categoryId]);

    return null; // Or you can return a loading indicator or some other UI
}

export default FetchProducts;