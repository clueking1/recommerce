import React from 'react'
import Navbar from '../../components/addOns/navbar'
import ProductLayout from '../../components/productPage/productLayout'
import Checkout from '../../components/addOns/checkout'
import { useAtcContext } from '../../components/utils/atcStore'
import './style.css'

function Products() {
    
    const [state] = useAtcContext()

    return (
        <div className="productWrapper">
            <Navbar />
            <ProductLayout />
            {state.length >= 1 ? <Checkout /> : undefined} 
            
            
        </div>
    )
}

export default Products