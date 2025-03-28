import React, { useState } from "react";
import ProductCards from "./ProductCards";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const TrendingProducts = () => {
  const [filtersState, setFiltersState] = useState({
      category: "all",
      priceRange: "",
    });
  const [visibleProducts, setVisibleProducts] = useState(8);
  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);
  
    const { category, priceRange } = filtersState;
    const [minPrice, maxPrice] = priceRange.split("-").map(Number);
  
    const {
      data: { products = [], totalPages, totalProducts } = {},
      error,
      isLoading,
    } = useFetchAllProductsQuery({
      category: category !== "all" ? category : "",
      minPrice: isNaN(minPrice) ? "" : minPrice,
      maxPrice: isNaN(maxPrice) ? "" : maxPrice,
      page: currentPage,
      limit: productsPerPage,
    });
  
  return (
    <section className="section__container product_container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader mb-12">
        <span className="font-semibold">What's Hot Right Now!</span> 🔥 Check
        out the trending games and gear everyone's talking about! Don't miss out
        on these must-have items.
      </p>

      {/* products card */}
      {/* <div className="mt-12">
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div> */}
       <div className="mt-12">
       <ProductCards products={products} />
       </div>

      {/* load more products btn */}
      <div className="product__btn">
        {visibleProducts < products.length && (
          <button className="btn" onClick={loadMoreProducts}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
