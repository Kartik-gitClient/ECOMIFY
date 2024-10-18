import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'cost_price', // Default sorting by cost_price
    direction: 'ascending', // Default sorting direction ascending
  });

  // Fetch sorted products from the server
  const fetchSortedProducts = () => {
    const url = `http://127.0.0.1:5000/sort-products?sort_by=${sortConfig.key}&direction=${sortConfig.direction}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching sorted products:', error));
  };


  const handleSortParameterChange = (event) => {
    setSortConfig((prevConfig) => ({
      ...prevConfig,
      key: event.target.value,
    }));
  };

  const handleSortDirectionChange = (event) => {
    setSortConfig((prevConfig) => ({
      ...prevConfig,
      direction: event.target.value,
    }));
  };


  useEffect(() => {
    fetchSortedProducts();
  }, [sortConfig]);

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-[#5F259F] mb-6">Product List</h2>


      <div className="flex justify-between mb-4">

        <div>
          <label className="mr-4 font-semibold text-gray-700">Sort by: </label>
          <select
            value={sortConfig.key}
            onChange={handleSortParameterChange}
            className="px-4 py-2 border rounded-md"
          >
            <option value="cost_price">Cost Price (CP)</option>
            <option value="selling_price">Selling Price (SP)</option>
            <option value="profit">Profit</option>
          </select>
        </div>


        <div>
          <label className="mr-4 font-semibold text-gray-700">Order: </label>
          <select
            value={sortConfig.direction}
            onChange={handleSortDirectionChange}
            className="px-4 py-2 border rounded-md"
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>

        {/* Sort Button */}
        <div>
          <button onClick={fetchSortedProducts} className="px-6 py-2 bg-[#5F259F] hover:bg-[#7A4BCA] text-white rounded-md font-semibold">
            Sort
          </button>
        </div>
      </div>

      <div className="overflow-x-auto shadow-lg">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold">ID</th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold">Brand</th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold">Product</th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold">Category</th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold">Cost Price</th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold">Selling Price</th>
              <th className="px-6 py-4 border border-gray-300 text-left text-sm font-semibold">Profit</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 border border-gray-300">{product.id}</td>
                <td className="px-6 py-4 border border-gray-300">{product.brand}</td>
                <td className="px-6 py-4 border border-gray-300">{product.product}</td>
                <td className="px-6 py-4 border border-gray-300">{product.category}</td>
                <td className="px-6 py-4 border border-gray-300">{product.cost_price}</td>
                <td className="px-6 py-4 border border-gray-300">{product.selling_price}</td>
                <td className="px-6 py-4 border border-gray-300">{product.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
