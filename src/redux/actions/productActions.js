import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCTS, SET_PRODUCTS } from "../constants/constats"

export const setProduct= (products) =>{
    return {
        type: SET_PRODUCTS,
        payload: products
    }
        
}

export const selectedProduct = (product) =>{
    return{
        type: SELECTED_PRODUCTS,
        payload: product
    }
}

export const removeProduct = () =>{
    return{
        type: REMOVE_SELECTED_PRODUCT
    }
}