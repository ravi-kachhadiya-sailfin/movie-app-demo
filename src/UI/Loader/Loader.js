import React from 'react';

import { useLoading, Puff } from '@agney/react-loading';

import classes from './Loader.module.css';

const Loader = () => {

    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Puff width="100" color="#092541" />,
    });

    return (
        <div className={classes.loaderBackdrop} style={{ height: Math.floor((80 * window.innerHeight) / 100) }}>
            <section {...containerProps}>
                {indicatorEl} {/* renders only while loading */}
            </section>
        </div>
    );

}

export default Loader;

