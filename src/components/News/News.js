import React from 'react';
import s from './News.module.css'

const News = (props) => {
    debugger;
    return (
        <div>
                {props.news.map(n => <div className={s.main}><br/>
                    <h3 className={s.title}>{n.title}</h3>
                    <img className={s.imageUrl} src={n.urlToImage} alt="photo"/>
                    <p className={s.content}>{n.content}</p>
                    <a className={s.url} href={n.url}>Read more...</a>
                    <i><p className={s.author}>{n.author}</p></i>
                </div>)}
        </div>
    )
};

export default News;
