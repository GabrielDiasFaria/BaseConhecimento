import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BlogView from './features/blogView/pages'
import BlogDetails from './features/blogDetails/pages'
import BlogCategory from './features/blogCategory/pages'

export default function Routes() {

    const NoMatchPage = () => {
        return (
            <h3>404 - Not found</h3>
        );
    };

    const Teste = () => {
        return (
            <h3>TESTE</h3>
        );
    };

    return (
        <BrowserRouter>
            <Switch>
                {/* Página Inicial do Blog */}
                <Route exact path='/blog' exact component={BlogView} />

                <Route path='/blog/teste' component={Teste} />

                <Route path='/blog/blogdetails/:id' component={BlogDetails} />
                <Route path='/blog/blogcategory/:id/:name' component={BlogCategory} />

                <Route component={NoMatchPage} />
            </Switch>
        </BrowserRouter>
    )
}