import React, { useEffect, useState } from 'react';
import ProductModal from '../components/ProductModal';
import ProductFilter from '../components/ProductFilter';

const Product = () => {
    /* State to manage products and modal*/
    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    /* State for loading status */
    const [loading, setLoading] = useState(true);

    /* State for category filter */
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
    const [categories, setCategories] = useState([]);

    /* State for search filter */
    const [searchTerm, setSearchTerm] = useState('');

    /* Function to fetch products from the API */
    const fetchProducts = async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data || []);

            const allCategories = [...new Set(data.map(product => product.category))];
            setCategories(['Select Category', ...allCategories]);
        }
        catch(error){
            console.error('Error fetching products:', error);
        }
        finally {
            setLoading(false); // Set loading to false once data is fetched
        }
    }

    /* Fetch products when component mounts */
    useEffect(() => {
        fetchProducts();
    }, []);

    /* Handle the showing of the modal */
    const openModal = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    /* Handle the closing of the modal */
    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    /* Handle the closing of the modal when clicking outside the modal */
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    };

    /* Close the modal on scroll */
    useEffect(() => {
        const handleScroll = () => {
            if (showModal) {
                setTimeout(() => {
                    closeModal();
                }, 150);
            }
        };
        
        window.addEventListener('scroll', handleScroll);

        /* Cleanup event listener on component unmount */
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showModal]);

    /* Filter products based on selected category */
    const filteredProducts = selectedCategory === 'Select Category' ? products : products.filter(product => product.category === selectedCategory);

    /* Filter products by search term on title */
    const searchedProducts = filteredProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        loading ? (
            <p className="loading">Waiting for products to be loaded...</p>
        ) : (
            <div className="mt-5">
                {/* Product Filter */}
                <ProductFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    categories={categories}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                {/* Products */}
                <div className="row">
                    {searchedProducts.map((product) => (
                        <div key={product.id} className="col-md-4 mb-3">
                            <div className="card">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.title}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">
                                        {product.title}
                                    </h5>
                                    <p className="card-price">
                                        ${product.price}
                                    </p>
                                    <button
                                        onClick={() => openModal(product)}
                                        className="btn btn-secondary mt-2"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Modal */}
                <ProductModal
                    showModal={showModal}
                    selectedProduct={selectedProduct}
                    closeModal={closeModal}
                    handleOutsideClick={handleOutsideClick}
                />
            </div>
        )
    );
}

export default Product
