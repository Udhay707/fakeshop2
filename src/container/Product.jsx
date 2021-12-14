import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product
        return (
            <div className='four column wide' key={id}>
                {
                    <Link to={`/details/${id}`}>
                            <div className='ui link cards'>
                                <div className='card'>
                                    <div className='image'>
                                        <img src={image} alt="product" />
                                    </div>
                                    <div className="content heigh">
                                        <div className='headers'> {title} </div>
                                        <div className='meta price'>$ {price} </div>
                                        <div className='meta'>{category}</div>
                                    </div>
                                </div>
                            </div>
                    </Link>
                }
                
            </div>

        );
    }
    );

    return (
        <>
        { (products.length > 0) ?
            renderList :
            <div className='loading'>
            </div>

        }
        </>);

}

export default Product
