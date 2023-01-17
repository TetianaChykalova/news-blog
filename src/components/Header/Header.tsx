import React from 'react';

function Header(props:any) {
    return (
        <header className='filter'>
            <p>Filter by keywords</p>
            <div>
                <img src="/img/search.png" alt="search"/>
                <input type="text" placeholder='Enter your search'/>
            </div>
        </header>
    );
}

export default Header;