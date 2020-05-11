import React from 'react';
import Parser from 'html-react-parser'

import '../styles/style.css'
import news from '../../../assets/img/blog/news-blog.jpg'

export default function MainBlogDetails({ article }) {
    return (
        <div className="main_blog_details">
            <img className="img-fluid" src={news} alt=""></img>
            <h4>{article.name}<br /></h4>
            <div className="user_details">
                <div className="float-left">
                    <a href="/blog">{article.category}</a>
                </div>
                <div className="float-right">
                    <div className="media">
                        <div className="media-body">
                            <h5>{article.author}</h5>
                            <p>11/05/2020</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {!article.html ? "<h4>Sem post</h4>" : Parser(article.html)}
                <p></p>
            </div>
            <div className="news_d_footer">
                <a href="/blog">
                    <i className="fa fa-heart"></i>
                    0 Pessoas curtiram
                </a>
                <a className="justify-content-center ml-auto" href="/blog">
                    <i className="fa fa-comment"></i>
                    0 Comentários
                </a>
                <div className="news_socail ml-auto">
                    <a href="/blog"><i className="fa fa-facebook"></i></a>
                    <a href="/blog"><i className="fa fa-twitter"></i></a>
                    <a href="/blog"><i className="fa fa-pinterest"></i></a>
                    <a href="/blog"><i className="fa fa-rss"></i></a>
                </div>
            </div>
        </div>
    )
}