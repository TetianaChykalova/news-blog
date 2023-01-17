import React from 'react';
import NewsItem from "../NewsItem/NewsItem";
import {NewsItemFace} from "../../models";

interface newsListProps {
    apiData: NewsItemFace;
}

function NewsList(props:newsListProps) {

    console.log(props)
    console.log(props.apiData)
    console.log(typeof props)

    return (
        <>

            <div className="newsList">

                <>
                    {/*{ api.length > 0 ? api.map:Array<object>((api: object) => <NewsItem news={api}/>) }*/}

                </>
            </div>
        </>
    );
}

export default NewsList;