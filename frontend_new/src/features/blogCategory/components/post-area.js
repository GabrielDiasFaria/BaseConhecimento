import React from 'react';

import c1 from '../../../assets/img/category/c1.jpg'
import a1 from '../../../assets/img/author/a1.png'

export default function PostArea({ articles }) {
    return (
        <section className="post-area">
            <div className="row">
                {
                    articles.length > 0 ? (
                        articles.map(line => (
                            <div className="col-lg-6 col-md-6">
                                <div className="single-post-item short">
                                    <figure>
                                        <img className="post-img img-fluid" src={c1} alt=""></img>
                                    </figure>
                                    <h3>
                                        <a href={`/blog/blogdetails/${line.id}`}>{line.name}</a>
                                    </h3>
                                    <p>{line.description}</p>
                                    <a href={`/blog/blogdetails/${line.id}`} className="primary-btn text-uppercase mt-15">Continuar Lendo</a>
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
													            13th Oct, 2018
												            </a>
                                                        </li>
                                                        <li>
                                                            <a href={`/blog/blogdetails/${line.id}`}>
                                                                <span className="lnr lnr-bubble"></span>
													            0
												            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                            <a href="/blog" className="justify-content-between align-items-center d-flex">
                                <p>Não possui artigos na categoria!</p>
                            </a>
                        )
                }
            </div>
        </section>
    )
}