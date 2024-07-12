import './Strapi.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Strapi() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:1337/api/products?populate=*').then((res) => {
            // console.log(res.data.data)
            setproducts(res.data.data)
        })
    }, []);
    return (
        <div className='border flex flex-row justify-center align-center flex-wrap px-10 py-5 space-x-4 '>
            {
                products.map((product, index) => (
                    <div key={index} className='card flex flex-col justify-center align-center'>
                        <img src={`http://localhost:1337${product.attributes.product_img.data.attributes.url}`} alt={product.name} className='rounded-3xl'/>
                        <h1>product name :{product.attributes.product_name}</h1>
                        <p>product Price :{product.attributes.product_price}</p>
                    </div>
                ))
            }

        </div>
    )
}
