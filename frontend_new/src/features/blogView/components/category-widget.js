import React, { useState, useEffect } from 'react';

import '../styles/style.css'
import api from '../../../service/api'

export default function CategoryWidget() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const response = await api.get('categories')
            setCategories(response.data)
        }
        fetch()
    }, [])

    return (
        <div className="single-widget category-widget">
            <h4 className="title">Post Categories</h4>
            <ul>
                {
                    categories.length > 0 ? (
                        categories.map(line => (
                            <li key={line.id}><a href={`/blog/blogcategory/${line.id}/${line.name}`} className="justify-content-between align-items-center d-flex">
                                <p>{line.name}</p> <span>{line.id}</span>
                            </a></li>
                        ))
                    ) : (
                            <li>
                                <a href="/blog" className="justify-content-between align-items-center d-flex">
                                    <p>Não possui categoria cadastrada!</p>
                                </a>
                            </li>
                        )
                }
            </ul>
        </div>
    )
}