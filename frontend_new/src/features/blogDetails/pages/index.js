import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import '../styles/style.css'
import MenuBlogView from '../../blogView/components/menu'
import BannerArea from '../components/banner-area'
import SinglePostArea from '../components/single-post-area'
import api from '../../../service/api'

export default function BlogDetails() {

    const [article, setArticle] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const fetch = async () => {
            await api.get(`articles/${id}`).then(response => {
                setArticle(response.data)
            })
        }
        fetch()
    }, [id])

    return (
        <div className="blogdetails">
            {/* Start header Area */}
            <MenuBlogView />

            <BannerArea titulo={article.name} />

            <SinglePostArea article={article} />
        </div>
    )
}