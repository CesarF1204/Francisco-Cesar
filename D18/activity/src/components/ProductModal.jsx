import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ProductModal = ({ showModal, selectedProduct, closeModal, handleOutsideClick }) => {
    /* Check if modal is not shown or no product is selected, return null (don't render anything) */
    if (!showModal || !selectedProduct) return null;

    return (
        <div
            className="modal fade show"
            aria-labelledby="productModalLabel"
            aria-hidden="true"
            onClick={handleOutsideClick}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="productModalLabel">
                            {selectedProduct.title}
                        </h5>
                        <button
                            type="button"
                            className="close close-icon"
                            onClick={closeModal}
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex justify-content-center mb-3">
                            <img
                                src={selectedProduct.image}
                                className="img-fluid"
                                alt={selectedProduct.title}
                            />
                        </div>
                        <p className="price">
                            <strong>Price:</strong> ${selectedProduct.price}
                        </p>
                        <p>
                            <strong>Category:</strong> {selectedProduct.category}
                        </p>
                        <p>
                            <strong>Description:</strong> {selectedProduct.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal