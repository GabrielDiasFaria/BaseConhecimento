import React from 'react';
import { Link } from 'react-router-dom'

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
                                        <Link to={`/blog/blogdetails/${line.id}`}>{line.name}</Link>
                                    </h3>
                                    <p>{line.description}</p>
                                    <Link to={`/blog/blogdetails/${line.id}`} className="primary-btn text-uppercase mt-15">Continuar Lendo</Link>
                                    <div className="post-box">
                                        <div className="d-flex">
                                            <div>
                                                <Link to={`/blog/blogdetails/${line.id}`}>
                                                    <img src={a1} alt=""></img>
                                                </Link>
                                            </div>
                                            <div className="post-meta">
                                                <div className="meta-head">
                                                    <Link to={`/blog/blogdetails/${line.id}`}>{line.author}</Link>
                                                </div>
                                                <div className="meta-details">
                                                    <ul>
                                                        <li>
                                                            <Link to={`/blog/blogdetails/${line.id}`}>
                                                                <span className="lnr lnr-calendar-full"></span>
													            13th Oct, 2018
												            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to={`/blog/blogdetails/${line.id}`}>
                                                                <span className="lnr lnr-bubble"></span>
													            0
												            </Link>
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