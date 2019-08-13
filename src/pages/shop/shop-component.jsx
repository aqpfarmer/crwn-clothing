import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverView from '../../components/collections-overview/collections-overview-component';
import CategoryPage from '../../pages/category/category-component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverView} />
        <Route path={`${match.path}/:category`} component={CategoryPage} />
    </div>
);

export default ShopPage;