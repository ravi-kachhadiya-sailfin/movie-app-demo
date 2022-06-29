import React from 'react';
import history from '../../utils/history';

import classes from './MoviePoster.module.css';

import dateFormate from 'dateformat';

const MoviePoster = (props) => {
    const movieImageUrl = "https://image.tmdb.org/t/p/original";

    const showItemDetails = (id, title) => {
        title = id + "-" + title.split(' ').map((word) => word.toLowerCase()).join('-');
        history.push(`/${props.dataOf}/${title}`);
    }

    return (
        <>
            <div className={classes.layout}>
                <div className={classes.image}>
                    <img
                        src={movieImageUrl + props.movieDetails.poster_path}
                        alt={props.dataOf === "movie" ? props.movieDetails.title : props.movieDetails.name}
                        onClick={() => showItemDetails(props.movieDetails.id,
                            props.dataOf === "movie" ? props.movieDetails.title : props.movieDetails.name)} />
                </div>

                <div className={classes.rating}>
                    <p>{props.movieDetails.vote_average * 10}</p>
                </div>

                <div className={classes.details}>
                    <p className={classes.title}>{props.dataOf === "movie" ? props.movieDetails.title : props.movieDetails.name}</p>
                    <p className={classes.releaseDate}>{props.dataOf === "movie" ? dateFormate(props.movieDetails.release_date, "mmm dd, yyyy") : props.movieDetails.first_air_date}</p>
                </div>
            </div>
        </>
    );
}

export default MoviePoster;