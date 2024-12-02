import React from 'react';

const ProductFilter = ({ selectedCategory, setSelectedCategory, categories, searchTerm, setSearchTerm }) => {
    return (
        <div className="filter-container mb-4">
            {/* Category Filter */}
            <div className="category-filter">
                <select
                    id="categoryFilter"
                    className="form-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    id="searchBar"
                    className="form-control"
                    placeholder="Search for a product"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
};

export default ProductFilter