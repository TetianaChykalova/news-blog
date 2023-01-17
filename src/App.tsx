import React from 'react';
import './App.scss'
import Header from "./components/Header/Header";
import {useState, useEffect} from "react";
import axios from "axios";
import {NewsItemFace} from "./models";
import NewsItem from "./components/NewsItem/NewsItem";
import uuid from 'react-uuid';

function App() {

    const [searchVal, setSearchVal] = useState('')
    // const onChangeSearchVal = (e: React.MouseEvent<HTMLInputElement>) => {
    //     let value: string = (e.target as HTMLInputElement).value
    //     setSearchVal(value)
    //     console.log(value, typeof value)
    //     return value
    // }

    const onChangeSearchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = (e.target as HTMLInputElement).value
        setSearchVal(value)
        console.log(value)
    }

    const clearSearchVal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSearchVal('')
    }

    const [api, setApi] = useState<NewsItemFace | null>(null);

    // console.log(api)

    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=d7291ad629d04856af10e4d7c30fc7f9')
            .then(response => {
                setApi(response.data)
            })
    }, [])


    // console.log(api)
    // console.log(api)

    return (
        <div className='wrapper'>
            <Header onChangeSearchVal={onChangeSearchVal} clearSearchVal={clearSearchVal} value={searchVal}/>
            <main>
                <h1>{ searchVal ? `Search by words: ${searchVal}` : 'All news' }</h1>
                <div>
                    <p>
                        Results: {api ? <span>{api.articles.filter(item => item.title.toLowerCase().includes(searchVal.toLowerCase().trim())).length}</span> : <span>...</span>}
                    </p>
                </div>
                <div className="newsList">
                    <>
                        {api ?
                            api.articles
                                .filter(item => item.title.toLowerCase().includes(searchVal.toLowerCase().trim()))
                                .map((news) => <NewsItem news={news} key={uuid()}/>)
                            : <p>Loading ...</p>}
                    </>
                </div>
            </main>
        </div>
    );
}

export default App;
