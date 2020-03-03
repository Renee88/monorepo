import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardActionArea, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Talk from './Talk'
import './Talks.css'
import axios from 'axios';
import Master from '../Master';

type ChosenTalkType={
    name: string,
    transcript: string,
    youTubeID: string
}

const useStyles = makeStyles(theme => ({
    video: {
        display: 'flex',
        height: '390',
        width: '640',
        margin: 'auto',
        playerVars: {
            autoplay: 1
        }
    },
    talk: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        background: 'linear-gradient(45deg,#584FEA,  #3B79EA)',
        zIndex: '-1'
    },
    master: {
        backgroundColor: '#DFE0E2'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        textAlign: 'center'
    },
    talkCard: {
        margin: '5px'
    }

}))

const Talks = () => {

    const classes = useStyles()

    const [talks, setTalks] = useState([])
    const [chosenTalk, setChosenTalk] = useState({})

    useEffect(() => {
        axios.get('http://localhost:4000/talks')
            .then(function (talks: Object) {
                talks = talks.data
                setTalks(talks)
            })
    }, [])

    const displayChosenTalk = (id) => () => {
        let chosenTalk: ?ChosenTalkType = talks.find(talk => talk.youTubeID === id)
        setChosenTalk(chosenTalk)
    }

    return (
        <div className='master-detail-container' >
                <Master state={{ master: talks, type: 'Talks' }} classes={classes} displayChosenTalk={displayChosenTalk} />
            <div className={classes.detail}>
                <Paper square >
                    <Talk chosenTalk={chosenTalk} classes={classes} />
                </Paper>
            </div>
        </div>
    );
};

export default Talks;