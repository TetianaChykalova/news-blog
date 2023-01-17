import React from 'react';
import './App.scss'
import Header from "./components/Header/Header";
import {useState, useEffect} from "react";
import axios from "axios";
import {NewsItemFace} from "./models";
import NewsItem from "./components/NewsItem/NewsItem";
import uuid from 'react-uuid';

function App() {

    const [api, setApi] = useState<NewsItemFace | null>(null);

    // console.log(api)

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=d7291ad629d04856af10e4d7c30fc7f9')
            .then(response => {
                setApi(response.data)
            })
    }, [])


    // console.log(api)
    console.log(api)

    return (
        <div className='wrapper'>
            <Header/>
            <main>
                <div>
                    <p>
                        Results: {api ? <span>{api.articles.length}</span> : <span>...</span>}
                    </p>
                </div>
                <div className="newsList">
                    <>
                        {api ? api.articles.map((news) => <NewsItem news={news} key={ uuid() }/>) : <p>Loading ...</p>}
                    </>
                </div>
            </main>
        </div>
    );
}

export default App;
