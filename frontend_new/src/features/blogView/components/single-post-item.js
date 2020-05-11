import React, { useState, useEffect } from 'react';

import '../styles/style.css'
import api from '../../../service/api'

import p1 from '../../../assets/img/posts/p1.jpg'
import a1 from '../../../assets/img/author/a1.png'

export default function SinglePostItem() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const response = await api.get('articles')
            setArticles(response.data.data)
        }
        fetch()
    }, [])

    return (
        <section className="post-area">
            {
                articles.length > 0 ? (
                    articles.map(line => (
                        <div className="single-post-item">
                            <figure>
                                <img className="post-img img-fluid" src={p1} alt=""></img>
                            </figure>
                            <h3>
                                <a href={`/blog/blogdetails/${line.id}`}>{line.name}</a>
                            </h3>
                            <p>{line.description}</p>
                            <a href={`/blog/blogdetails/${line.id}`} className="primary-btn text-uppercase mt-15">Continuar lendo</a>
                            <div className="post-box">
                                <div className="d-flex">
                                    <div>
                                        <a href={`/blog/blogdetails/${line.id}`}>
                                            <img src={a1} alt=""></img>
                                        </a>
                                    </div>
                                    <div className="post-meta">
                                        <div className="meta-head">
                                            <a href={`/blog/blogdetails/${line.id}`}>{line.author}</a>
                                        </div>
                                        <div className="meta-details">
                                            <ul>
                                                <li>
                                                    <a href={`/blog/blogdetails/${line.id}`}>
                                                        <span className="lnr lnr-calendar-full"></span>
                                                        0
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={`/blog/blogdetails/${line.id}`}>
                                                        <span className="lnr lnr-picture"></span>
                                                        {line.category}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={`/blog/blogdetails/${line.id}`}>
                                                        <span className="lnr lnr-bubble"></span>
                                                        0 Comentários
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                        <a href="/blog" className="justify-content-between align-items-center d-flex">
                            <p>Não possui categoria cadastrada!</p>
                        </a>
                    )
            }
        </section>
    )
}