// src/components/JobListings/Pagination.jsx
import React from "react";
import "./Pagination.css"; // Ensure this file exists

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination-container">
            {/* Previous Button */}
            <button
                className="pagination-btn"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1} // Disable if on first page
            >
                « Previous
            </button>

            {/* Page Indicator */}
            <span className="page-info">
                Page {currentPage} of {totalPages}
            </span>

            {/* Next Button */}
            <button
                className="pagination-btn"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages} // Disable if on last page
            >
                Next »
            </button>
        </div>
    );
};

export default Pagination;
 