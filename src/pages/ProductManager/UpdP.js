import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateProduct() {
  const [productId, setProductId] = useState('');
  const [brand, setBrand] = useState('');
  const [product, setProduct] = useState('');
  const [category, setCategory] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [profit, setProfit] = useState('');

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/update-product/${productId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch product details');
      }
      const productData = await response.json();
      setBrand(productData.brand);
      setProduct(productData.product);
      setCategory(productData.category);
      setCostPrice(productData.cost_price);
      setSellingPrice(productData.selling_price);
      setProfit(productData.profit);
    } catch (error) {
      toast.error(error.message || 'An error occurred while fetching product details!');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const productData = {
      brand,
      product,
      category,
      cost_price: costPrice,
      selling_price: sellingPrice,
      profit
    };

    try {
      const response = await fetch(`http://127.0.0.1:5000/update-product/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update product');
      }

      const result = await response.json();
      toast.success(result.message || 'Product updated successfully!');

      // Reset form fields
      setProductId('');
      setBrand('');
      setProduct('');
      setCategory('');
      setCostPrice('');
      setSellingPrice('');
      setProfit('');
    } catch (error) {
      toast.error(error.message || 'An error occurred while updating the product!');
    }
  };

  return (
    <div className="p-4 m-auto w-3/4">
      <h2 className="text-3xl text-center font-bold text-[#5F259F] mb-6">Update Product</h2>
      <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productId">
            Product ID
          </label>
          <input
            type="number"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="button"
          onClick={fetchProductDetails}
          className="bg-[#5F259F] hover:bg-[#7A4BCA] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Fetch Details
        </button>
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
          Update Product
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UpdateProduct;
