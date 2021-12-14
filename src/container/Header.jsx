import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className='ui container center head'>
                <Link to = "/" > 
                    <h2>FakeShop</h2>
                </Link>
                <div className='source'>
                    <a href='https://github.com/Udhay707/fakeshop2' target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Header
