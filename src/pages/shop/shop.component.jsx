import React from 'react';
import { Route } from 'react-router';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import CollectionPageContainer from '../../pages/collection/collection.container';

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart()
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
    }

    render() {
        const { match } = this.props;

        /* 
            You generally use the render prop when you need some data from the component that contains your routes, 
            since the component prop gives no real way of passing in additional props to the component.
            https://stackoverflow.com/questions/51226685/reactjs-component-vs-render-in-route
        */

        return (
            <div className='shop-page'>
                <Route
                    exact path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}

const mapDispatchMapsToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchMapsToProps)(ShopPage);