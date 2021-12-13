import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product'
import axios from 'axios';
import {setProduct} from '../redux/actions/productActions'
const ProductListing = () => {
    const products = useSelector((state)=>state.products);
    var dispatch = useDispatch();
    useEffect(() => {
        async function fetchAPI(dispatch){
            const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>console.log(err));
            dispatch(setProduct(response.data));
        }
        fetchAPI(dispatch);
    }, [dispatch])
    return (
            <div className='ui grid container'>
                <Product />
                
            </div>
    )
}

export default ProductListing
