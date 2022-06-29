import React, { useEffect } from 'react';

import MovieTvLayout from '../MovieTVLayout/MovieTvLayout';
import Loader from '../../UI/Loader/Loader';
import classes from './Movie.module.css';

// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as crudAction from '../../storeUtils/actions/crudAction';
import * as componentAction from '../../storeUtils/actions/componentAction';

const Movie = (props) => {

    useEffect(() => {
        const APIDetails = {
            dataOf: "/movie/popular",
            lang: "&language=en-US",
            query: ''
        }
        props.actions.postAll(APIDetails, {}, 'movieList');
        props.actions.loader(true);
    }, []);

    return (
        <>
            <div className={classes.MovieLayout}>
                {
                    props.loader
                        ? <Loader size={100} />
                        : props.movieList !== undefined
                            ? <MovieTvLayout itemList={props.movieList.data.results} dataOf="movie" />
                            : null
                }
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        movieList: state.crud.movieList,
        loader: state.component.loader
    };
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        Object.assign({}, crudAction, componentAction),
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);