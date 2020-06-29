import React from 'react';
import "../App.css";

function FiltersComponent() {
    return (
        <div className="fContainer">
            <h3>FILTERS<span>?</span></h3>
            <ul className="fList">
                <li>Product Type</li>
                <li>Share Class</li>
                <li>Prospectus Objective</li>
                <li>Minimum Purchase</li>
                <li>Annual Operating Expense</li>
                <li>Morningstar Style Box (Equities)</li>
                <li>Morningstar Style Box (Bonds)</li>
                <li>Morningstar Rating</li>
                <li>Morningstar Catergories</li>
            </ul>
        </div>
    )
}

export default FiltersComponent;
