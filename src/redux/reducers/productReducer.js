import { SET_PRODUCTS } from "../constants/constats"

const initialState = {
    products: [{
        id: 10,
        name: "udhay",
        designation: "FullStack dev"
    }]
}

export const productReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return state;
        default:
            return state;

    }
}