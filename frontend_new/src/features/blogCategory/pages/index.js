import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import '../styles/style.css'
import MenuBlogView from '../../blogView/components/menu'
import BannerArea from '../components/banner-area'
import MainBody from '../components/main-body'

import api from '../../../service/api'

export default function BlogCategory() {

    const [articles, setArticles] = useState([])
    const [category, setCategory] = useState("Categoria")
    const { id, name } = useParams()

    useEffect(() => {
        const fetch = async () => {
            setCategory(name)
            await api.get(`categories/${id}/articles`).then(response => {
                setArticles(response.data)
            })
        }
        fetch()
    }, [id, name])

    return (
        <div className="blogdetails">
            {/* Start header Area */}
            <MenuBlogView />

            <BannerArea category={category} />

            <MainBody articles={articles} />
        </div>
    )
}