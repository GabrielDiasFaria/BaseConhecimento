import React from 'react';

import '../styles/style.css'

import r1 from '../../../assets/img/blog/r1.jpg'

export default function PopularPostsWidget() {
    return (
        <div className="single-widget popular-posts-widget">
            <h4 className="title">Popular Posts</h4>
            <div className="blog-list ">
                <div className="single-popular-post d-flex flex-row">
                    <div className="popular-thumb">
                        <img className="img-fluid" src={r1} alt=""></img>
                    </div>
                    <div className="popular-details">
                        <a href="/blog">
                            <h4>Space Final Frontier</h4>
                        </a>
                        <p className="text-uppercase">02 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}