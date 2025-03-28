import React, { useEffect, useState } from "react";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";
import { useFetchAllProductsQuery } from "../../redux/features/products/productsApi";

const filters = {
  categories: ["all", "accessories", "games", "xbox games", "headphones",],
  priceRanges: [
    { label: "Under ₹50", min: 0, max: 50 },
    { label: "₹1000 - ₹2000", min: 1000, max: 2000 },
    { label: "₹3000 - ₹6000", min: 3000, max: 6000 },
    { label: "₹6000 and above", min: 6000, max: Infinity },
  ],
};

const ShopPage = () => {
  const [filtersState, setFiltersState] = useState({
    category: "all",
    priceRange: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(40);

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

  

  //clear filters
  const clearFilters = () => {
    setFiltersState({ category: "all", priceRange: "" });
  };

  // Filter options
  const filterOptions = {
    categories: filters.categories.map((category) => ({
      label: category,
      value: category,
    })),
    priceRanges: filters.priceRanges.map((range) => ({
      label: range.label,
      value: `${range.min}-${range.max}`,
    })),
  };

  //handle Pages
  const handlePageChange = (pageNumber) => {
    if(pageNumber > 0 && pageNumber <= totalPages){
      setCurrentPage(pageNumber);
    }
  }

  if (isLoading) return <div>Loading....</div>;
  if (error) return <div>Error loading products</div>;

  const startProduct = (currentPage - 1) * productsPerPage + 1;
  const endProduct = startProduct + products.length - 1;

  
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
        Explore our vast game shop today! Discover amazing deals on top-rated titles, consoles, and accessories. Enjoy exclusive discounts, pre-order bonuses, and limited-time offers. Find your next adventure now.
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* Left side */}
          <ShopFiltering
            filters={filters}
            filtersState={filtersState}
            setFiltersState={setFiltersState}
            clearFilters={clearFilters}
          />

          {/* Right Side */}
          <div>
            <h3 className="text-xl font-medium mb-4">
             Showing {startProduct} to {endProduct} of {totalProducts} products
            </h3>
            <ProductCards products={products} />

            {/* Pagination */}
            <div className="mt-6 flex justify-center">
              <button 
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button key={index} 
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}
                rounded-md mx-1`}>
                  {index + 1}
                </button>
              ))}
              <button 
               disabled={currentPage === totalPages}
               onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md ml-2">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
