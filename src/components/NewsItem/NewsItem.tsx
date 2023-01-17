import React from 'react';
import {ArticlesEntity} from "../../models";

interface NewsItemProps {
    news: ArticlesEntity
}

function NewsItem(props:NewsItemProps) {
    console.log(props)
    return (
        <div className="newsItem">
            <div>
                <img src={props.news.urlToImage ? props.news.urlToImage : '/img/default.jpg'} alt="news"/>
            </div>
            <div>
                <header>
                    <div>
                        <img src="/img/calendar.png" alt="icon"/>
                        <span>{props.news.publishedAt}</span>
                    </div>
                    <div>{props.news.author}</div>
                </header>
                <div>
                    <h2>{props.news.title}</h2>
                    <p>{props.news.description}</p>
                </div>
                <button>
                    <a href={props.news.url}>
                        Read more <span> <img src="/img/arrow-right.png" alt="icon"/> </span>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default NewsItem;