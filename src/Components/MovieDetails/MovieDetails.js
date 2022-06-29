import React, { useEffect, useState, useRef } from 'react';

import classes from './MovieDetails.module.css';
import Loader from '../../UI/Loader/Loader';
import { ImageColorFinder } from '../../BusinessLogic/ImageColorFinder/ImageColorFinder';

import dateFormate from 'dateformat';
import humanizeDuration from 'humanize-duration';

// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as crudAction from '../../storeUtils/actions/crudAction';
import * as componentAction from '../../storeUtils/actions/componentAction';

const MovieDetails = (props) => {
    // props.match.params.title
    const myRef = useRef();

    const [imageData, setImageData] = useState(['', -1]);
    const [poster, setPoster] = useState({ moviePoster: '', movieBackgroundPoster: '' })
    const [pageNotFound, setPageNotFound] = useState(false);

    const baseImageURL = 'https://image.tmdb.org/t/p/original';
    useEffect(() => {
        const APIDetails = {
            dataOf: props.match.params.dataOf,
            lang: "language=en-US",
            type: props.match.params.title.split("-")[0]
        }
        if (APIDetails.dataOf !== "movie" && APIDetails.dataOf !== "tv") {
            setPageNotFound(true);
        }
        else {
            props.actions.getAll(APIDetails, 'movieDetails');
            props.actions.loader(true);
        }
    }, []);

    useEffect(() => {
        async function getImageData(imageURL) {
            setImageData(await ImageColorFinder(imageURL));
        }

        if (props.movieDetails !== undefined) {
            setPoster((prevPoster) => {
                return {
                    ...prevPoster,
                    movieBackgroundPoster: baseImageURL
                        + props.movieDetails.data.backdrop_path
                }
            });
            setPoster((prevPoster) => {
                return {
                    ...prevPoster, moviePoster: baseImageURL
                        + props.movieDetails.data.poster_path
                }
            });
            getImageData(baseImageURL
                + props.movieDetails.data.poster_path);
        }
        return setImageData(['', -1]);
    }, [props.movieDetails])

    // console.log(imageData);
    return (
        <div ref={myRef}>
            {
                // pageNotFound ?
                //     <h1>Page Not Found</h1> : 
                props.loader
                    ? <Loader size={100} />
                    : props.movieDetails !== undefined && imageData[0] !== '' && imageData[1] !== -1 ?
                        <div className={classes.movieDetailsMainLayout}
                            style={{
                                backgroundImage: "url(" + poster.movieBackgroundPoster + ")",
                                color: imageData[1] < 100 ? 'white' : '#000'
                            }}>

                            <div className={classes.movieDetailsLayout}
                                style={{
                                    background: "linear-gradient(to right," +
                                        imageData[0].toString() + "ff, " + imageData[0].toString() + "db"
                                }}>

                                <div className={classes.poster}>
                                    <img src={poster.moviePoster} alt={poster.moviePoster} />
                                </div>

                                <div className={classes.movieDetails} >
                                    <div className={classes.backgroundLayer}>
                                        <div className={classes.title}>
                                            <h2>
                                                {props.match.params.dataOf === "movie" ?
                                                    props.movieDetails.data.title : props.movieDetails.data.original_name + " "}
                                                <span> {"(" + dateFormate(props.movieDetails.data.release_date, "yyyy") + ")"}</span>
                                            </h2>
                                        </div>

                                        <div className={classes.details}>
                                            <p>
                                                {dateFormate(props.movieDetails.data.release_date, "mm/dd/yyyy") + " "}

                                                ({props.movieDetails.data.production_countries.length === 0
                                                    ? "US" : props.movieDetails.data.production_countries[0]?.iso_3166_1})

                                                {" - " + props.movieDetails.data.genres.map((genre) => genre.name).join(", ") + " "}
                                                {
                                                    " - " + humanizeDuration((props.match.params.dataOf === "movie"
                                                        ? props.movieDetails.data.runtime
                                                        : props.movieDetails.data.episode_run_time[0]) * 1000 * 60).split(" ")
                                                        .map((value) =>
                                                            isNaN(value)
                                                                ? value.toLowerCase().slice(0, 1) + " "
                                                                : value
                                                        ).join("")
                                                }
                                            </p>
                                        </div>

                                        <div className={classes.functions}>
                                            <div className={classes.rating}>
                                                <p>{props.movieDetails.data.vote_average * 10}</p>
                                            </div>
                                            <div className={classes.userScore}>
                                                <p>User Score</p>
                                            </div>
                                            <div className={classes.icons}>
                                                <p>ICONS</p>
                                            </div>
                                            <div className={classes.playTrailer}>
                                                <p>PlayTrailer</p>
                                            </div>
                                        </div>

                                        <div className={classes.tagLine}>
                                            {props.movieDetails.data.tagline}
                                        </div>

                                        <div className={classes.overviewHanding}>
                                            <p>Overview</p>
                                        </div>

                                        <div className={classes.overview}>
                                            {props.movieDetails.data.overview}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        movieDetails: state.crud.movieDetails,
        loader: state.component.loader
    };
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        Object.assign({}, crudAction, componentAction),
        dispatch
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);