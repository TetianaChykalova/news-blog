import React from 'react';
import {NewsItemFace} from "../../models";

interface NewsItemProps {
    news: NewsItemFace
}

function NewsItem(props:NewsItemProps) {
    console.log(props.news)
    return (
        <div className="newsItem">
            <div>
                <img src={props.news.imageUrl} alt="news"/>
            </div>
            <div>
                <header>
                    <div>
                        <img src="/img/calendar.png" alt="icon"/>
                        <span>{props.news.updatedAt}</span>
                    </div>
                    <div>{props.news.newsSite}</div>
                </header>
                <div>
                    <h2>{props.news.title}</h2>
                    <p>{props.news.summary}</p>
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