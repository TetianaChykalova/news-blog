import React from 'react';

function Header(props:any) {
    return (
        <>
            <header className='header'>
                <div>
                    <img src="/img/logo.png" alt="logo"/>
                    <h1>Travel News</h1>
                </div>
                <div>
                    Be the first to learn news from around the world!
                </div>
            </header>
        </>
    );
}

export default Header;