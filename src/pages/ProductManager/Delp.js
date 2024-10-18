import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteProduct() {
  const [productId, setProductId] = useState('');
  const [productSummary, setProductSummary] = useState(null);

  const fetchProductSummary = async () => {
    if (!productId) {
      toast.error('Please enter a product ID');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:5000/product-summary/${productId}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch product summary');
      }

      const result = await response.json();
      setProductSummary(result.product);
    } catch (error) {
      toast.error(error.message || 'An error occurred while fetching the product summary!');
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/delete-product/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete product');
      }

      const result = await response.json();
      toast.success(result.message || 'Product deleted successfully!');

      // Reset form field and product summary
      setProductId('');
      setProductSummary(null);
    } catch (error) {
      toast.error(error.message || 'An error occurred while deleting the product!');
    }
  };

  return (
    <div className="p-4 m-auto w-1/2">
      <h2 className="text-3xl font-bold text-[#5F259F] mb-6">Delete Product</h2>
      <form onSubmit={handleDelete} className="bg-white p-6 rounded-lg shadow-md">
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

        <div className="mb-4">
          <button
            type="button"
            onClick={fetchProductSummary}
            className="bg-[#5F259F] hover:bg-[#7A4BCA] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Fetch Details
          </button>
        </div>

        {productSummary && (
          <div className="mb-4 bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">Product Summary:</h3>
            <p><strong>ID:</strong> {productSummary.id}</p>
            <p><strong>Name:</strong> {productSummary.name}</p>
            <p><strong>Price:</strong> {productSummary.price}</p>
            <p><strong>Category:</strong> {productSummary.category}</p>
            <p><strong>Description:</strong> {productSummary.description}</p>
            {/* Add other fields as per your database */}

            <button
              type="submit"
              className="bg-[#5F259F] hover:bg-[#7A4BCA] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete Product
            </button>
          </div>

        )}

      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick draggable pauseOnHover />
    </div>
  );
}

export default DeleteProduct;
