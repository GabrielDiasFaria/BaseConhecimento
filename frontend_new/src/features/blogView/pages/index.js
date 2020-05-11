import React from 'react';

import '../styles/style.css'
import MenuBlogView from '../components/menu'
import BannerArea from '../components/banner-area'
import MainBody from '../components/main-body'
import FooterArea from '../components/footer-area'

export default function BlogView() {
    return (
        <div className="blogview">

            {/* Start header Area */}
            <MenuBlogView />

            {/* Start banner Area */}
            <BannerArea text={{ text1: "Descomplicando", text2: "Linguagens" }} />

            {/* Start main body Area */}
            <MainBody />

            {/* Start footer Area */}
            <FooterArea />

        </div>
    )
}