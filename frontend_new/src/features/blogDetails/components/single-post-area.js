import React from 'react';

import '../styles/style.css'
import SearchWidget from '../../blogView/components/search-widget'
import PortifolioWidget from '../../blogView/components/protfolio-widget'
import PopularPostsWidget from '../../blogView/components/popular-posts-widget'
import CategoryWidget from '../../blogView/components/category-widget'
import Newsletter from '../../blogView/components/newsletter-widget'
import MainBlogDetails from '../components/main_blog_details'

export default function SinglePostArea({ article }) {
    return (
        <section className="blog_area section-gap single-post-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <MainBlogDetails article={article} />
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
        </section>
    )
}