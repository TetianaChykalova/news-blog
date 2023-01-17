import React from 'react';
import {ArticlesEntity} from "../../models";
import {Button} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface NewsItemProps {
    news: ArticlesEntity
}

function NewsItem(props:NewsItemProps) {
    // console.log(props)
    return (
        <div className="newsItem">
            <div>
                <img src={props.news.urlToImage ? props.news.urlToImage : '/img/default.jpg'} alt="news"/>
            </div>
            <div>
                <header>
                    <div>
                        <CalendarMonthIcon/>
                        <span>{props.news.publishedAt.split('T')[0]}</span>
                    </div>
                    {props.news.author ? <div><PersonIcon/> {props.news.author}</div> : null}
                </header>
                <div>
                    <h2>{props.news.title}</h2>
                    <p>{props.news.description}</p>
                </div>
                <Button variant="outlined">
                    <a href={props.news.url}>
                        read in original
                    </a>
                </Button>
            </div>
        </div>
    );
}

export default NewsItem;