import React from 'react';

import classes from './MovieTvLayout.module.css';
import MoviePoster from '../MoviePoster/MoviePoster';

// material-ui
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

const MovieTvLayout = (props) => {
    return (
        <div className={classes.movieTvLayout}>
            <div className={classes.itemLayout}>
                {
                    props.itemList.map((movie, index) => {
                        return <MoviePoster key={index} movieDetails={movie} dataOf={props.dataOf} />
                    })
                }

            </div>
            {/* <button> Load more</button> */}
        </div>
    );
}

export default MovieTvLayout;
