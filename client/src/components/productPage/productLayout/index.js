import React from 'react'
import './style.css'
import ViewProducts from '../products'

function ProductLayout() {
    return (
        <div className="productWrapper">
            <div className="productColor">
                <ViewProducts />
            </div>
        </div>
    )
}

export default ProductLayout