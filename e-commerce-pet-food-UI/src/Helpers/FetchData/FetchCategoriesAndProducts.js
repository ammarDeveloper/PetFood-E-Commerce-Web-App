import { useState, useEffect } from 'react';

const FetchCategoriesAndProducts = ({ setCatogories, setLoading, limit=2, offset = 0, categoryName = "", setCount}) => {
  const restApi = process.env.REACT_APP_REST_API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = categoryName? `${restApi}api/allCatgories?where=name(en= "${categoryName}")` : 'http://localhost:4000/api/allCatgories'
        console.log(url);
        const categoriesResponse = await fetch(url, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json'}
        });

        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          const categoriesWithProducts = await Promise.all(
            categoriesData.body.results.map(async (category) => {
              const productsResponse = await fetch(`${restApi}api/allProductsWithCategory?categoryId=${category.id}&limit=${limit}&offset=${offset}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
              });

              if (productsResponse.ok) {
                const productsData = await productsResponse.json();
                setCount(productsData.body.total)
                return { ...category, products: productsData.body.results };
              } else {
                return { ...category, products: [] };
              }
            })
          );

          console.log(categoriesWithProducts); // Log the response data
          setCatogories(categoriesWithProducts);
          setLoading(false);
        } else {
          console.error('Error fetching data:', categoriesResponse.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [setCatogories, setLoading, offset, categoryName]);

  return null; // Or you can return a loading indicator or some other UI
}

export default FetchCategoriesAndProducts;