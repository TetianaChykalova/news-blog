import React from 'react';
import './App.scss'
import Header from "./components/Header/Header";
import {useState, useEffect} from "react";
import axios from "axios";
import NewsList from "./components/NewsList/NewsList";
import {NewsItemFace} from "./models";
import NewsItem from "./components/NewsItem/NewsItem";
import uuid from 'react-uuid';

function App() {

    const [api, setApi] = useState<NewsItemFace[] | null>(null);

    // console.log(api)

    useEffect(() => {
        axios.get('https://api.spaceflightnewsapi.net/v3/articles')
            .then(response => {
                setApi(response.data)
            })
    }, [])


    // console.log(api)
    console.log(typeof api)

    return (
        <div className='wrapper'>
            <Header/>
            <main>
                <div>
                    <p>
                        Results: {api ? <span>{api.length}</span> : <span>...</span>}
                    </p>
                </div>
                <div className="newsList">
                    <>
                        {api ? api.map((news) => <NewsItem news={news} key={ uuid() }/>) : <p>Loading ...</p>}
                    </>
                </div>
            </main>
        </div>
    );
}

export default App;
