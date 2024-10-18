import React from 'react';
import { FaPlus, FaTrash, FaTags, FaSortAmountUpAlt } from 'react-icons/fa'; // Icons for actions
import { Link } from 'react-router-dom'; // Import Link for navigation

function ManageProducts() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-[#5F259F] mb-8 text-center">Product Management</h2>

        {/* Product Management Options - Side by Side Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* View Product Details */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaTags className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">View Product Details</h3>
            <p className="text-gray-600 mb-4">Check detailed information about any product in your catalog.</p>
            <Link to="/view-products">
              <button className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
                View Products
              </button>
            </Link>
          </div>

          {/* Add Product Line */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaPlus className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Product Line</h3>
            <p className="text-gray-600 mb-4">Add a new range of products to your catalog.</p>
            <Link to="/add-product">
              <button className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
                Add Product
              </button>
            </Link>
          </div>

          {/* Delete Product Line */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaTrash className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Delete Product Line</h3>
            <p className="text-gray-600 mb-4">Remove a specific product line from the catalog.</p>
            <Link to="/delete-product">
              <button className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
                Delete Product
              </button>
            </Link>
          </div>

      
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaTags className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Product Line</h3>
            <p className="text-gray-600 mb-4">Update existing products.</p>
            <Link to="/update-product">
              <button className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
                Update Product
              </button>
            </Link>
          </div>

          {/* Sort by Price */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300 ease-in-out">
            <FaSortAmountUpAlt className="text-4xl text-[#5F259F] mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sort Products</h3>
            <p className="text-gray-600 mb-4">View products sorted by their price range.</p>
            <Link to="/sort-products">
              <button className="bg-[#5F259F] text-white px-4 py-2 rounded hover:bg-purple-800 transition duration-300 ease-in-out">
                Sort Products
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ManageProducts;
