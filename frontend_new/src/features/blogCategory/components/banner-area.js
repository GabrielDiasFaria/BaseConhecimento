import React from 'react';

import '../styles/style.css'

export default function BannerArea({ category }) {
    return (
        <section className="banner-area relative">
            <div className="overlay overlay-bg"></div>
            <div className="container box_1170">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="about-content col-lg-12">
                        <h1 className="text-white">
                            {category}
                        </h1>
                        <p className="text-white link-nav">
                            <a href="index.html">Home </a>
                            <span className="lnr lnr-arrow-right"></span>
                            <a href="category.html">
                                Categoria
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}