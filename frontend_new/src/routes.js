import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BlogView from './features/blogView/pages'
import BlogDetails from './features/blogDetails/pages'
import BlogCategory from './features/blogCategory/pages'

export default function Routes() {

    // BrowserRouter
    return (
        <BrowserRouter>
            <Switch>
                {/* Página Inicial do Blog */}
                <Route path='/blog' exact component={BlogView} />

                <Route path='/blog/blogdetails/:id' component={BlogDetails} />
                <Route path='/blog/blogcategory/:id/:name' component={BlogCategory} />

            </Switch>
        </BrowserRouter>
    )
}