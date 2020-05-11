import React from 'react';

import '../styles/style.css'

export default function BannerArea({ titulo }) {
    return (
        <section className="banner-area relative">
            <div className="overlay overlay-bg"></div>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="about-content col-lg-12">
                        <h1 className="text-white">
                            {titulo}
                        </h1>
                        <p className="text-white link-nav">
                            <a href="/blog">Home </a>
                            <span className="fa fa-arrow-right"></span>
                            <a href="/blog"> Detalhes do Post</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}