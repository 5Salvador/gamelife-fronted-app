import React from 'react'

const ShopFiltering = ({filters, filtersState, setFiltersState, clearFilters }) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
      <h3>Filters</h3>

      {/* Category */}
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Category</h4>
        <hr />
        {
          filters.categories.map((category) => (
            <label key={category}>
              <input type="radio" name="category" id='category' value={category}
              checked={filtersState.category === category}
              onChange={(e) => setFiltersState({...filtersState, category: e.target.value})}
               />
               <span className='ml-1'>{category}</span>
            </label>
          ))
        }
      </div>

      {/* Price */}
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Price</h4>
        <hr />
        {
          filters.priceRanges.map((range) => (
            <label key={range.label} className='capitalize cursor-pointer'>
              <input type="radio" name="priceRange" id='priceRange' value={`${range.min} - ${range.max}`}
              checked={filtersState.priceRange === `${range.min}-${range.max}`}
              onChange={(e) => setFiltersState({...filtersState, priceRange: e.target.value})}
               />
               <span className='ml-1'>{range.label}</span>
            </label>
          ))
        }
      </div>

      {/* Clear all filters */ }
      <button onClick={clearFilters} className='bg-primary py-1 px-4 text-white rounded'>Clear All Filters</button>
    </div>
  )
}

export default ShopFiltering