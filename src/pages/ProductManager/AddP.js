import React, { useState } from 'react';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProduct() {
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [profit, setProfit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure that all fields are filled
    if (!brand || !product || !category || !costPrice || !sellingPrice || !profit) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:5000/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          brand,
          product,
          category,
          cost_price: parseFloat(costPrice), // Ensuring numerical values for prices
          selling_price: parseFloat(sellingPrice),
          profit: parseFloat(profit),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Product added successfully!');
        setBrand('');
        setProduct('');
        setCategory('');
        setCostPrice('');
        setSellingPrice('');
        setProfit('');
      } else {
        throw new Error(result.error || 'Failed to add product');
      }
    } catch (error) {
      toast.error(error.message || 'An error occurred while adding the product');
    }
  };

  return (
    <div className="p-4 w-1/2 m-auto">
      <h2 className="text-3xl text-center font-bold text-[#5F259F] mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">
            Product
          </label>
          <input
            type="text"
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="costPrice">
            Cost Price
          </label>
          <input
            type="number"
            id="costPrice"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sellingPrice">
            Selling Price
          </label>
          <input
            type="number"
            id="sellingPrice"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profit">
            Profit
          </label>
          <input
            type="number"
            id="profit"
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-[#5F259F] hover:bg-[#7A4BCA] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default AddProduct;
