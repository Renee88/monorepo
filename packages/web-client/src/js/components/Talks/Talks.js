import React, { useState, useEffect } from 'react';
import {Card, CardContent, CardActionArea, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ScrollToBottom from 'react-scroll-to-bottom'
import Talk from './Talk'
import './Talks.css'
import axios from 'axios';

const useStyles = makeStyles(theme =>({
    video: {
        display: 'flex',
        height: '390',
        width: '640',
        margin:'auto'
    },
    talk:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color:'white',
        background: 'linear-gradient(45deg,#584FEA,  #3B79EA)',
        zIndex: '-1'
    },
    master:{
        backgroundColor: '#DFE0E2'
    },
    paper:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    title:{
        textAlign: 'center'
    }
}))

const Talks = () => {

    const classes = useStyles()

    const [talks, setTalks] = useState([])
    const [chosenTalk, setChosenTalk] = useState({})

    useEffect(() => {
        axios.get('http://localhost:4000/talks')
        .then(function(talks){
            talks = talks.data
            setTalks(talks)
        })
    }, [])

    const displayChosenTalk = (id) => () => {
        let chosenTalk = talks.find(talk => talk.youTubeID === id)
        setChosenTalk(chosenTalk)
    }

    return (
        <ScrollToBottom>
            <Grid container className='master-detail-container' direction='row' alignItems='stretch'>
                <Grid item sm={3} className={classes.master}>
                    {talks.map((talk) =>
                        <Card key={talk.youTubeID} className='detail-card' onClick={displayChosenTalk(talk.youTubeID)}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>
                                        {talk.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>)}
                </Grid>

                <Grid item sm={9} className={classes.talk} >
                    <Paper square >
                        <Talk chosenTalk={chosenTalk} classes={classes} />
                    </Paper>
                </Grid>
            </Grid>
        </ScrollToBottom>
    );
};

export default Talks;