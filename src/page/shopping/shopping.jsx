
import React,{useState, useEffect} from "react";
import "./Shopping.scss"
import Item from '../../components/item/Item';
import axios from "axios";
function Shopping() {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        axios.get('https://motorshop-85ou.onrender.com/api/products')
        .then((res)=>{
            setProducts(res.data.products)
        })
    },[])
    return (
        <div className="shopping">
            <ul className='list'>
                {products.map(product=>(
                    <div key={product.id}>
                        <li className='item'>       
                            <Item title={product.title} price={product.price} img={product.img} color={product.color} desc={product.desc} categories={product.categories} />
                        </li>
                    </div>
                ))} 
            </ul>
        </div>
        );
}
export default Shopping;