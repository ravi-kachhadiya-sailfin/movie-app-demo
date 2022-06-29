import React, { useEffect } from 'react'

import classes from './Search.module.css';
import { SearchedItems } from '../SearchedItems/SearchedItems';
import * as APIs from '../../utils/apis';

import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router';


export const Search = (props) => {

    const path = useRouteMatch();
    console.log(useRouteMatch(), props.location);

    useEffect(() => {
        const APIDetails = {};
        props.actions.postAll(APIDetails, {}, 'movieList');
        props.actions.loader(true);
        if (path.params.dataOf === 'movie') {
            APIDetails = {
                dataOf: APIs.search_movie,
                lang: "&language=en-US",
                query: encodeURIComponent(props.location.search)
            };
            let query = decodeURIComponent(props.location.search);

        }
        else if (path.params.dataOf === 'tv') {

        }
        else if (path.params.dataOf === 'all') {

        }
    }, []);

    return (
        <div className={classes.searchLayout}>
            <div className={classes.searchResult}>
                <div className={classes.title}>
                    <p>Search Results</p>
                </div>

                <div className={classes.results}>
                    <div className={classes.allResult}>
                        <p className={classes.mediaTypeTitle}>All</p>
                        <p className={classes.numberOfResults}>5</p>
                    </div>

                    <div className={classes.movieResults}>
                        <p className={classes.mediaTypeTitle}>Movie</p>
                        <p className={classes.numberOfResults}>454545</p>
                    </div>

                    <div className={classes.tvResults}>
                        <p className={classes.mediaTypeTitle}>Tv Shows</p>
                        <p className={classes.numberOfResults}>2</p>
                    </div>
                </div>
            </div>
            <div className={classes.searchedItemsListLayout}>
                <SearchedItems />
                <SearchedItems />
                <SearchedItems />
                <SearchedItems />
                <SearchedItems />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
