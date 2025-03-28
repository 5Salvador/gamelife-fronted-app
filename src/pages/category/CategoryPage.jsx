import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCards from "../shop/ProductCards";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from API
  const {
    data = {},
    error,
    isLoading,
  } = useFetchAllProductsQuery({
    category: categoryName || "", // Pass categoryName to filter from API
  });

  const productsData = data?.products || [];

  // Filter products when category changes
  useEffect(() => {
    if (categoryName && productsData.length) {
      const filtered = productsData.filter(
        (product) => product.category.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [categoryName, productsData]);

  // Scroll to top only when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
        Discover the best gaming products! Browse through our categories, from accessories to headphones, and find exactly what you need to level up your gaming experience. 🚀🔥
        </p>
      </section>

      {/* Products card */}
      <div className="section__container">
        {isLoading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>Error loading products</p>
        ) : (
          <ProductCards products={filteredProducts} />
        )}
      </div>
    </>
  );
};

export default CategoryPage;
