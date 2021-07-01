import React from 'react';
import styles from './Event.module.css';

export default Event = (props) => {
    return (
        <div className={styles.EventItem}>
            <img src = {props.thumb} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            {props.viewSlideshow ? <button>View Slideshow</button> : ''}
            {props.viewVideo ? <button>View Video</button> : ''}
        </div>
    );
}