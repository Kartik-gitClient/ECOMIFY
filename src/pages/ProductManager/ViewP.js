import React, { useState, useEffect } from 'react';

function ViewProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch products from the backend
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/view-products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="p-6 bg-gray-50">
            <h2 className="text-3xl font-bold text-[#5F259F] mb-6">Product List</h2>

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
                        {products.map((product, index) => (
                            <tr
                                key={product.id}
                                className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                            >
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
}

export default ViewProducts;
