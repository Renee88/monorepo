import React from 'react';
import YouTube from 'react-youtube';


const Talk = ({ chosenTalk: { name, youTubeID }, classes }: Object) => {
    return (
        (name && youTubeID) ?
            <div className={classes.paper}>
                <h1 className={classes.title}>{name}</h1>
                <YouTube
                    videoId={youTubeID}
                    className={classes.video}
                />
            </div>
            : null
    );
};

export default Talk;