import React from 'react'
import Navbar from '../../components/addOns/navbar'
import ProductLayout from '../../components/productPage/productLayout'
import './style.css'

function Products() {

    return (
        <div className="productWrapper">
            <Navbar />
            <ProductLayout />
        </div>
    )
}

export default Products