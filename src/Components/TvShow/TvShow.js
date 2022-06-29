import React, { useEffect } from 'react';

import MovieTvLayout from '../MovieTVLayout/MovieTvLayout';
import Loader from '../../UI/Loader/Loader';
import classes from './TvShow.module.css';

// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as crudAction from '../../storeUtils/actions/crudAction';
import * as componentAction from '../../storeUtils/actions/componentAction';

const TvShow = (props) => {

    useEffect(() => {
        const APIDetails = {
            dataOf: "/tv/popular",
            lang: "language=en-US",
            query: ""
        }
        props.actions.postAll(APIDetails, {}, 'tvShowList');
        props.actions.loader(true);
    }, []);

    return (
        <>
            <div className={classes.TvShowLayout}>
                {
                    props.loader
                        ? <Loader size={100} />
                        : props.tvShowList !== undefined
                            ? <MovieTvLayout itemList={props.tvShowList.data.results} dataOf="tv" />
                            : null
                }
            </div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        tvShowList: state.crud.tvShowList,
        loader: state.component.loader
    };
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        Object.assign({}, crudAction, componentAction),
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(TvShow);