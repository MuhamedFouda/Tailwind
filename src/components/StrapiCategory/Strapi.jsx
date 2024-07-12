import './StrapiCategory.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function StrapiCategory() {
    const [categorys, setcategorys] = useState([])
    const [cate, setcate] = useState([])
    useEffect(() => {
        axios.get('http://localhost:1337/api/categories', {
            params: {
              populate: {
                categories: {
                  populate: "*",
                },
                products: {
                  populate: "*",
                },
              },
            },
          }).then((res) => {
            console.log(res.data.data)
            setcategorys(res.data.data)
            // الايرور هنا ان الداتا الاخيره عبارة عن ارراي فانا مش عارف ادخل جواه بدوت عاوز الوب عليه مش عارف
            setcate(res.data.data.attributes.categorie_name.products.data)
        })
    }, []);

    function sort(){
        
    }


    return (
        <div className='border flex flex-row justify-center align-center flex-wrap px-10 py-5 space-x-4 '>
            {
                categorys.map((cat, index) => (
                    <div key={index} className='card flex flex-col justify-center align-center'>
                        <h1 onClick={sort} className='cursor-pointer'> {cat.attributes.categorie_name} </h1>                       
                    </div>
                ))
            }

        </div>
    )
}
