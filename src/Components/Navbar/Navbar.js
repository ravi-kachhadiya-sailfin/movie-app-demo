import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// component and css files
import classes from './Navbar.module.css';
import history from '../../utils/history';

// material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Navbar = () => {

    const [title, setTitle] = useState('');
    const [mediaType, setMediaType] = useState('all');
    const search = () => {
        if (title) {
            mediaType === 'movie' ?
                history.push(`/search/movies?q=${title}`)
                : mediaType === 'tv' ?
                    history.push(`/search/tvs?q=${title}`)
                    : history.push(`/search?q=${title}`)
        }
    }

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const mediaTypeHandler = (event) => {
        setMediaType(event.target.value);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbarLayout} >
                <div className={classes.navbarItems}>
                    <Toolbar variant="dense">
                        <h3 className={classes.logo}>Watchers</h3>
                        <Link to="/movie" className={classes.navItem}>
                            <p>Movies</p>
                        </Link>
                        <Link to="/tv" className={classes.navItem}>
                            <p>TV Shows</p>
                        </Link>
                    </Toolbar>
                    <div className={classes.searchLayout}>
                        <select className={classes.selectSearchType} onChange={mediaTypeHandler}>
                            <option value="all">All</option>
                            <option value="movie">Movie</option>
                            <option value="tv">Tv Shows</option>
                        </select>
                        <input
                            type="text"
                            className={classes.searchInput}
                            name="search"
                            placeholder="Search for movie or tv shows."
                            onChange={titleHandler} />
                        <button type="submit" className={classes.searchButton} onClick={search}>Search</button>
                    </div>
                </div>
            </AppBar>
        </div >
    );
}

export default Navbar;