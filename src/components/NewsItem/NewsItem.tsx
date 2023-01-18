import React, {useState} from 'react';
import {ArticlesEntity} from "../../models";
import {Button} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

interface NewsItemProps {
    news: ArticlesEntity,
    key: string
}

function NewsItem(props: NewsItemProps) {

    const [modal, setModal] = useState(false)

    const openModal = (): void => {
        setModal(true)
    }
    const closeModal = (): void => {
        setModal(false)
    }

    // console.log(modal)

    // console.log(props)
    return (
        <div className="newsItem">
            <div>
                <img src={props.news.media ? props.news.media : '/img/default.jpg'} alt={props.news.title}/>
            </div>
            <div>
                <header>
                    {<div><CalendarMonthIcon/> {props.news.published_date.split(' ')[0]}</div>}
                    {props.news.authors.length > 0 && <div><PersonIcon/> {props.news.authors}</div>}
                    {props.news.country !== 'unknown' && <div><LanguageOutlinedIcon/> {props.news.country}</div>}
                </header>
                <div className='content'>
                    <h2>{`${props.news.title.substring(0, 100)}...`}</h2>
                    <p>{`${props.news.summary.substring(0, 150)}...`}</p>
                </div>
                <Button variant="outlined">
                    <a target='_blank' rel='noreferrer' href={props.news.link}>
                        read full in original
                    </a>
                </Button>
                <Button variant="contained" onClick={openModal}>
                    read details here
                </Button>
            </div>
            {
                modal &&
                <div className="modal">
                    <div className='content'>
                        <h2>{props.news.title}</h2>
                        <p>{props.news.summary}</p>

                        <Button variant="contained" onClick={closeModal}>
                            Back
                        </Button>
                    </div>
                </div>
            }
        </div>
    );
}

export default NewsItem;