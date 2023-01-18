import React from 'react';

function Loading(props:any) {
    return (
        <div className='loading'>
                <div className="element">
                    <img src="/img/loading.png" alt=""/>
                </div>

            <p>
                Sorry :( <br/>
                We have a problem... <br/>
                Please, try again later
            </p>
        </div>
    );
}

export default Loading;