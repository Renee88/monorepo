import React, { useState } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Rooms from '../Rooms/Rooms'
import Users from '../Users/Users'
import Talks from '../Talks/Talks'
import Home from '../Home/Home'
import NavDrawer from '../NavDrawer/NavDrawer'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import './Routes.css'

const useStyles = makeStyles(theme => ({
    link:{
        textDecoration: 'none',
        color: 'black'
    }
}))

const Routes = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    return (
        <div id ="main-container">
            <div id="main-bar-container">
                <MenuIcon onClick={() => setOpen(true)} />
                <Link to='/home' className={classes.link}><div id="logo">My Monorepo</div></Link>
            </div>
            <NavDrawer open={open} setOpen={setOpen} />
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/home' />} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/users' component={Users} />
                <Route exact path='/talks' component={Talks} />
                <Route exact path='/rooms' component={Rooms} />
            </Switch>
        </div>
    );
};

export default Routes;