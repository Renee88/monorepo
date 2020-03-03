import React from 'react';
import { action } from '@storybook/addon-actions';
import {makeStyles} from '@material-ui/core'
import Master from '../js/components/Master';

export default {
  title: 'Master',
  component: Master,
  excludeStories: /.*Data$/
};



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

const users = [{
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
},
{
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
},
{
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
},
{
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}, {
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
},
{
  name: 'liam Rosenberg',
  email: 'lifesucks2020@gmail.com',
  age: 15,
  picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
}
]

const talks = [
  {name: 'Monkeys'},
  {name: 'Human'},
  {name: 'Bla'}
]


export const actionsData = {
  displayChosenUser: action('displayChosenUser'),
  displayChosenTalk: action('displayChosenTalk'),
  displayChosenRoom: action('displayChosenRoom')
}


export const UsersMaster = () => {
  const classes = useStyles();
  return <Master state={{ master: users, type: 'Users' }} classes={classes} {...actionsData} />
}

export const TalksMater = () =>{
  const classes = useStyles()
  return <Master state={{master: talks, type: 'Talks'}} classes={classes} {...actionsData} />
}


