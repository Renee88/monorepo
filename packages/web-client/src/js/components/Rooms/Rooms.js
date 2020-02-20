import React, { useState, useEffect } from 'react';
import {Card, Typography, CardContent, CardActionArea} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core'
import Room from './Room'
import './Rooms.css'

const useStyles = makeStyles( theme => ({
    master:{
        backgroundColor: '#DFE0E2'
    }
}))

const Rooms = () => {
    const classes = useStyles()

    const [rooms, setRooms] = useState([])
    const [chosenRoom, setChosenRoom] = useState({})

    useEffect(() => {
        setRooms([{ name: 'Room1', id: 1 }, { name: 'Room2', id: 2 }, { name: 'Room3', id: 3 }])
    }, [])

    const displayChosenRoom = (id) => () => {
        let chosenRoom = rooms.find(room => room.id === id)
        setChosenRoom(chosenRoom)
    }

    return (
        <div className="master-detail">
            <Grid container className='master-detail-container' direction='row' alignItems='stretch'>
                <Grid item sm={3} className={classes.master}>
                    {rooms.map((room) =>
                        <Card key={room.id} className='detail-card' onClick={displayChosenRoom(room.id)}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography>
                                        {room.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>)}
                </Grid>

                <Grid item sm={9} className='detail'>
                    <Paper square >
                        <Room chosenRoom={chosenRoom} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Rooms;