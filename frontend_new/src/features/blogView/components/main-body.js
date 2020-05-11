import React from 'react';

import '../styles/style.css'

import SinglePostItem from './single-post-item'
import SearchWidget from './search-widget'
import PortifolioWidget from './protfolio-widget'
import PopularPostsWidget from './popular-posts-widget'
import CategoryWidget from './category-widget'
import Newsletter from './newsletter-widget'

export default function MainBody() {
    return (
        <div className="main-body section-gap mt--30">
            <div className="container box_1170">
                <div className="row">
                    <div className="col-lg-8 post-list">
                        <SinglePostItem />
                    </div>

                    <div className="col-lg-4 sidebar">
                        <SearchWidget />
                        <PortifolioWidget />
                        <PopularPostsWidget />
                        <CategoryWidget />
                        <Newsletter />
                    </div>
                </div>
            </div>
        </div>
    )
}