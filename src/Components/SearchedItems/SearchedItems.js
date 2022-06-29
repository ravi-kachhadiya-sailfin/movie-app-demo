import classes from './SearchedItems.module.css'
import React from 'react'
import { connect } from 'react-redux'

export const SearchedItems = (props) => {
    return (
        <div className={classes.searchedItemsLayout}>
            <div className={classes.imageLayout}>
                <img style={{ height: "100%" }} src="https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" />
            </div>

            <div className={classes.itemDetails}>
                <div className={classes.titleAndDateLayout}>
                    <p className={classes.title}>Game Of thrones</p>
                    <p className={classes.date}>April 17, 2011</p>
                </div>
                <div className={classes.descriptionLayout}>
                    <p>Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits ...</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchedItems)
