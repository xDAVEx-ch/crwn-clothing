import React from 'react';
import { Route } from 'react-router';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    state = {
        isLoading: true
    };

    unsuscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

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

        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap);
            this.setState({ isLoading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { isLoading } = this.state;

        /* 
            You generally use the render prop when you need some data from the component that contains your routes, 
            since the component prop gives no real way of passing in additional props to the component.
            https://stackoverflow.com/questions/51226685/reactjs-component-vs-render-in-route
        */

        return (
            <div className='shop-page'>
                <Route
                    exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner
                        isLoading={isLoading} {...props} />}
                />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner
                        isLoading={isLoading} {...props} />}
                />
            </div>
        )
    }
}

const mapDispatchMapsToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchMapsToProps)(ShopPage);