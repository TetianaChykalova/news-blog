import React from 'react';
import './App.scss'
import Filter from "./components/Header/Filter";
import {useState, useEffect} from "react";
import axios from "axios";
import {NewsItemFace} from "./models";
import NewsItem from "./components/NewsItem/NewsItem";
import uuid from 'react-uuid';
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";

function App() {

    const [searchVal, setSearchVal] = useState('')

    const onChangeSearchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = (e.target as HTMLInputElement).value
        setSearchVal(value)
        console.log(value)
    }

    const clearSearchVal = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSearchVal('')
    }

    const [api, setApi] = useState<NewsItemFace | null>(null);

    console.log(api)

    const options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/latest_headlines?lang=en&topic=travel&page_size=100&',
        headers: {
            'x-api-key': 'JD-w3LX8QQbTc1jSCZgwt9nrHGiPlyJiQ2tByoo0ANU'
        }
    };

    // useEffect(() => {
    //     axios.request(options)
    //         .then(response => {
    //             setApi(response.data)
    //         })
    // })

    console.log(api)

    return (
        <div className='wrapper'>
            <Header/>
            <Filter onChangeSearchVal={onChangeSearchVal} clearSearchVal={clearSearchVal} value={searchVal}/>
            <main>
                <h2>{searchVal ? `Search by words: ${searchVal}` : 'All news'}</h2>
                <div className='results'>
                    <p>
                        Results: {api ?
                        <span>
                            {
                                searchVal ?
                                    api.articles
                                        .filter(item => item.title.toLowerCase().includes(searchVal.toLowerCase().trim())).length +
                                    api.articles
                                        .filter(item => item.summary.toLowerCase().includes(searchVal.toLowerCase().trim())).length
                                    : api.articles.length
                            }
                        </span>
                        : <span>...</span>}
                    </p>
                </div>

                <div className="newsList">
                    <>
                        {
                            api ?
                                api.articles
                                    .filter(
                                        item => item.title.toLowerCase().includes(searchVal.toLowerCase().trim())
                                            || item.summary.toLowerCase().includes(searchVal.toLowerCase().trim())
                                    )
                                    .map((news) => <NewsItem news={news} key={uuid()}/>)
                                : <Loading/>
                        }
                    </>
                </div>
            </main>
        </div>
    );
}

export default App;
