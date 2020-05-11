import React from 'react';

import '../styles/style.css'

export default function SearchWidget() {
    return (
        <div className="single-widget search-widget">
            <form className="example search_form" action="#">
                <input type="text" placeholder="Search Posts" name="search2"></input>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}
