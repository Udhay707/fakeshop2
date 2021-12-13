import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCTS, SET_PRODUCTS } from "../constants/constats"

const initialState = {
    products: []
}

export const productReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return {...state, products: payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state={},{type,payload}) =>{

    switch(type){
    case SELECTED_PRODUCTS:
        return{
            ...state, ...payload
        }
    case REMOVE_SELECTED_PRODUCT:
        return{}   
    default:
        return state
    }
}