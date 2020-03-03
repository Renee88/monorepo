import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Master from '../Master'
import Paper from '@material-ui/core/Paper'
import User from './User'
import UserCard from './UserCard'
import './Users.css'

type ChosenUserType = {
    name: string,
    picture: string,
    email: string,
    age: number,
    dogs: Array<Object>,
    online: number,
    lifeMoto: Array<string>
}

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
    scroll: {
        backgroundColor: '#DFE0E2',
        height: '90vh'
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
    const [page, setPage] = useState(1)

    useEffect(() => {
        axios.get(`http://localhost:4000/users/${page}`)
            .then(function (users) {
                users.data.map(user => user.online = Math.floor(Math.random() * 2))
                setUsers(users.data)
            })
    }, [])

    const displayChosenUser = (id: number) => () => {
        console.log(id)
        axios.get(`http://localhost:4000/user/${id}`).then(function (chosenUser: any) {
            let user: Object = chosenUser.data
            console.log(chosenUser)
            console.log(users)
            axios.get('http://loremricksum.com/api/?paragraphs=3&quotes=2').then(function(lifeMoto: any){
                user.lifeMoto = lifeMoto.data.data
                setChosenUser(user)
            })
        })
        
    }


    return (
        <div className='master-detail-container' >
            <Master state={{ master: users, type: 'Users' }} classes={classes} displayChosenUser={displayChosenUser} />
            <div className={classes.detail}>
                <Paper className={chosenUser.name ? classes.userPage : null}>
                    <User chosenUser={chosenUser} />
                </Paper>
            </div>
        </div>

    );
};

export default Users;