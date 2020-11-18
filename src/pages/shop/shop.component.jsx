import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';
import { useEffect } from 'react';

const CollectionsOverviewContainer = lazy(
    () => import('../../components/collections-overview/collections-overview.container')
);

const CollectionPageContainer = lazy(() => import('../../pages/collection/collection.container'));

const ShopPage = ({ match, fetchCollectionsStart }) => {

    useEffect(() => {
        fetchCollectionsStart()
    }, [fetchCollectionsStart]);

    //const collectionRef = firestore.collection('collections');

    /* The fetch pattern most commonly used for other type of database */

    /*fetch('https://firestore.googleapis.com/v1/projects/crw-database/databases/(default)/documents/collections')
        .then(response => response.json())
        .then((response) => {
            /*convertCollectionsSnapshotToMap must change to work better with the nested array inside response
            const collectionMap = convertCollectionsSnapshotToMap(response);
            updateCollections(collectionMap);
            this.setState({ isLoading: false });
        })
    */

    /* The observable pattern that Firebase uses */

    /*this.unsuscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionMap);
        this.setState({ isLoading: false });
    });

    */
    /* Using the get() method*/

    /*collectionRef.get().then(snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot)
        updateCollections(collectionMap);
        this.setState({ isLoading: false });
    });*/

    /* 
        You generally use the render prop when you need some data from the component that contains your routes, 
        since the component prop gives no real way of passing in additional props to the component.
        https://stackoverflow.com/questions/51226685/reactjs-component-vs-render-in-route
    */

    return (
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route
                    exact path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </Suspense>
        </div>
    )
}

const mapDispatchMapsToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchMapsToProps)(ShopPage);