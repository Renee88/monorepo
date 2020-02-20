import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core'
import ScrollToBottom from 'react-scroll-to-bottom'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import User from './User'
import UserCard from './UserCard'
import './Users.css'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card: {
        margin: 5
    },
    master:{
        backgroundColor: '#DFE0E2'
    },
    cover: {
        display: 'inline-block',
        width: 40,
        borderRadius: 20
    },
    name: {
        marginLeft: 20
    },
    online: {
        color: '#32ff7e'
    },
    offline: {
        color: '#ff3838'
    },
    userDetails: {
        display: 'flex',
        alignItems: 'center'
    },
    userPage: {
        margin: 10,
        padding: 10
    },
    detail: {
        background: 'linear-gradient(45deg,#cd84f1, #c56cf0)',
        height: 'fit-content',
        zIndex: '-1'
    }
}));

const Users = () => {

    const classes = useStyles()
    const [users, setUsers] = useState([])
    const [chosenUser, setChosenUser] = useState({})

    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(function (users) {
                users.data.map(user => user.online = Math.floor(Math.random() * 2))
                setUsers(users.data)
            })
    }, [])

    const displayChosenUser = (email) => () => {
        let chosenUser = users.find(user => user.email === email)
        axios.get('http://loremricksum.com/api/?paragraphs=3&quotes=2')
            .then(function (lifeMoto) {
                chosenUser.lifeMoto = lifeMoto.data.data
                setChosenUser(chosenUser)
            })
    }

    return (
        
            <ScrollToBottom>
                <Grid container className='master-detail-container' direction='row' alignItems='stretch'>
                    <Grid item sm={3} className={classes.master}>
                        {users.map((user, i) => <UserCard key={i} user={user} classes={classes} displayChosenUser={displayChosenUser} />)}
                    </Grid>
                    <Grid item sm={9} className={classes.detail}>
                        <Paper className={chosenUser.name ? classes.userPage : null}>
                            <User chosenUser={chosenUser} />
                        </Paper>
                    </Grid>
                </Grid>
            </ScrollToBottom>
    );
};

export default Users;