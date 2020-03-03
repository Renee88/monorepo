import React from 'react'
import { action } from '@storybook/addon-actions';
import { makeStyles } from '@material-ui/core'
import UserCard from '../js/components/Users/UserCard'


export default {
    title: 'User Card',
    component: UserCard,
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

const user = {
    name: 'liam Rosenberg',
    email: 'lifesucks2020@gmail.com',
    age: 15,
    picture: 'https://randomuser.me/api/portraits/thumb/women/20.jpg'
  }

//   const newTheme = {
//     themeName: 'Grey Theme',
//     palette: {
//         primary1Color: '#00bcd4',
//         alternateTextColor: '#4a4a4a',
//         canvasColor: '#616161',
//         textColor: '#bdbdbd',
//         secondaryTextColor: 'rgba(255, 255, 255, 0.54)',
//         disabledColor: '#757575',
//         accent1Color: '#607d8b',
//     },
// };


export const UserCardStory = () => {
    const UserCardData = {
        key: 1,
        user: user,
        classes: useStyles()
    }
    return(
    <UserCard {...UserCardData} displayChosenUser={()=>action('displayChosenUser')} />
    )
}