import React, {useEffect, useState} from 'react'
import './style.css'
import ViewProducts from '../products'
import API from '../../utils/API'

function ProductLayout() {
    const [items, setItems] = useState()
    useEffect(() => {
        API.getImages()
        .then(res => {
            setItems(res.data)
        })
    }, [])
    return (
        <div className="productWrapper">
            <div className="productColor">
                {items === undefined ? undefined :<ViewProducts items = {items} />}
            </div>
        </div>
    )
}

export default ProductLayout